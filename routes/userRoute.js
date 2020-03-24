import express from 'express';
import connection from '../connection';
import bcrypt from 'bcrypt';
import { validateEmail, removeHtmlEntities } from '../utils/validate';
import UsersService from '../services/UsersService';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const usersService = new UsersService();


const router = express.Router();
dotenv.config();

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
                    usersService.addUser(req.body).then((user) => {
                        return res.status(200).json({
                            message: 'Imformation Submitted!',
                        })
                    })
                        .catch(error => {
                            return res.status(400).json({
                                error: error
                            })
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

router.put('/edit/:id', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body).exec()
        .then((result) => {
            res.status(200).json({
                message: 'record updated',
            });
        })
        .catch((error) => {
            res.status(500).json({
                error,
            });
        })
})

router.get('/user/:id', (req, res) => {
    User.findOne({ _id: req.params.id }).exec()
        .then((result) => {
            res.status(200).json({
                data: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                error,
            })
        })
});

export default router;
