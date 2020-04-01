import express from 'express';
import TrancService from '../services/TrancServices';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const transService = new TrancService();

const router = express.Router();

router.post('/insert', (req, res) => {
    transService.addUser(req.body).then((response) => {
        return res.status(200).json({
            message: 'Information Submitted',
        })
    })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error: error
            })
        });
});


router.post('/pay', (req, res) => {
  let body = {
    reference: Date.now(),
    amount: req.body.amount,
    email: req.body.email
  }
  axios({
    method: 'post',
    url: 'https://api.paystack.co/transaction/initialize',
    headers: {Authorization: `Bearer ${process.env.PK_Sk}`},
    data: body
  })
  .then(response => {
    console.log(response.data)
    res.send(response.data.data)
  })
  .catch(err => {
    res.send(err)
  })
});


export default router;
