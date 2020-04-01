import express from 'express';
import FarmsService from '../services/FarmServices';
import dotenv from 'dotenv';
import axios from 'axios';
import connection from '../connection';
var paystack = require('paystack')(process.env.PK_Sk);

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

router.put('/update', (req, res) => {
          connection.query('UPDATE farmdata SET ? WHERE id = ?', [{ unit_paid: req.body.unit_paid }, req.body.farmid], function(err, result){
              if(err){
                  return res.status(400).json({
                      error: err
                  })
              }
              else{
                  return res.status(200).json({
                      message: "Farm Updated"
                  })
              }
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

router.post('/verify', (req, res) => {
  paystack.transaction.verify(req.body.reference, function(error, body){
    if(error){
      return res.status(400).json({
        err: error
    })
    }
    else{
      if(body.data.status == 'success'){
        return res.status(200).json({
          message: "Payment Successful"
      })
      }
      else {
        return res.status(200).json({
          message: "Payment Unsuccessful"
      })
      }
    }
  })
});


export default router;
