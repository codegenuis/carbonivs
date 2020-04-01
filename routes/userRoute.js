import express from 'express';
import connection from '../connection';
import bcrypt from 'bcrypt';
import { validateEmail, removeHtmlEntities } from '../utils/validate';
import UsersService from '../services/UsersService';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import OtpService from '../services/OtpService';
import nodemailer from 'nodemailer';
import moment from moment; 

const usersService = new UsersService();
const otpService = new OtpService();


const router = express.Router();
dotenv.config();
const otp = otpService.create();

var transporter = nodemailer.createTransport({
    host: 'mail.payfarmer.com',
    port: 465,
    secure: true,
    auth: {
        user: 'app@payfarmer.com', // Your email id
        pass: 'PO09%42@20j0' // Your password
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});

router.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!validateEmail(email)) {
        return res.status(500).json({
            message: "Invalid Email"
        })
    }
    let query = connection.query("SELECT * FROM fp_users WHERE user_email = ?", [email], (error, user) => {
        if (error) {
            return res.status(500).json({
                error: error
            })
        }
        if (user.length < 1) {
            return res.status(401).json({
                message: 'Auth Failed'
            })
        } else {
            if(user[0].statusz != 'Active'){
                res.status(401).json({
                    message: 'Auth Failed'
                })
            }
            else{
            var newHash = user[0].user_pass.replace('$2y$', '$2b$');
            bcrypt.compare(password, newHash, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message:  'Auth Failed'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].user_email,
                        firstname: user[0].first_name,
                        lastname : user[0].last_name
                    },process.env.JWT_KEY,{
                        expiresIn: "7d"
                    })
                    return res.status(200).json({
                        message: 'Auth successful',
                        data: {
                            email: user[0].user_email,
                            firstname: user[0].first_name,
                            lastname : user[0].last_name
                        },
                        token: token
                    })
                }
                res.status(401).json({
                    message: 'Auth Failed'
                })
            })
        }  
        }
    })
});


router.post('/register', (req, res) => {
    let email = req.body.user_email
    let query = connection.query("SELECT * FROM fp_users WHERE user_email = ?", [email], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({
                error: err
            })
        }
        if (result.length == 0) {
            bcrypt.hash(req.body.user_pass, 10, (err, hash) => {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        error: err
                    })
                }
                else {
                    req.body.user_pass = hash
                        var mailOptions = {
                            from: '<app@payfarmer.com>',
                            to: req.body.user_email,
                            subject: "OTP",
                            text: 'Kindly find otp  ' + otp,
                            html: "<p>Kindly find otp " + otp + " </p>",
                        };
                        transporter.sendMail(mailOptions, function(error, info){
                            if(error){
                                console.log(error);
                                return res.status(400).json({
                                    error: error
                                })
                            }else{
                                usersService.addUser(req.body).then((user) => {
                                    var otpBody = {id: 0, user_email: req.body.user_email, code: otp, expires_in: moment().add(11, 'minutes').unix()}
                                var query = connection.query('INSERT INTO otpz SET ?', otpBody, function(err, result) {
                                    if (err) {
                                        console.log(err)
                                        return res.status(400).json({
                                            error: err
                                        })
                                    }
                                    else{
                                        console.log("1 record inserted");
                                        return res.status(200).json({
                                            message: 'Information Submitted'
                                        })
                                    }
                                  });
                                })

                                .catch(error => {
                                    return res.status(400).json({
                                        error: error
                                    })
                                });
                                console.log('Message sent: ' + info.response);
                            }
                        });       
                }
            })
        } else {
            return res.status(422).json({
                message: 'User exists'
            })
        }

    })
})

router.put('/edit', (req, res) => {
    usersService.editUser(req.body,req.body.email)
    .then(user => {
        return res.status(200).json({
            message: 'Details Updated',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error: error
        })
    });
})

router.put('/verify', (req, res) => {
    otpService.verify(req.body.email, req.body.code).then((response) => {
        if(response[0].code == req.body.code && moment.unix() >= response[0].expires_in){
            connection.query('UPDATE fp_users SET ? WHERE user_email = ?', [{ statusz: 'Active' }, req.body.email], function(err, result){
                if(err){
                    return res.status(400).json({
                        error: err
                    })
                }
                else{
                    return res.status(200).json({
                        message: "User Verified"
                    })
                }
            })
        }
        else {
            return res.status(400).json({
                message: "Invalid code or code has expired"
            })
        }
    })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error: error
            })
        });
});

export default router;
