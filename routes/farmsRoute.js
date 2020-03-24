import express from 'express';
import FarmsService from '../services/FarmServices';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const farmService = new FarmsService();

const router = express.Router();

router.get('/', (req, res) => {
  farmService.getAll()
  .then(result => {
    return res.status(500).json({
      data: result
  })
  })
  .catch(err => {
    return res.status(500).json({
      error: err
  })
  })
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
