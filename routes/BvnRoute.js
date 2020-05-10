import express from 'express';
import HttpService from '../services/HttpService';
import {decrypt} from '../utils/encdec';
import dotenv from 'dotenv';

dotenv.config();

const httpService = new HttpService();

const router = express.Router();

router.get('/:id', (req, res) => {
  var payload = {
    identification_type: "bvn",
    identification_number: req.params.id,
  }
  httpService.getBvn(payload)
  .then(res => res.json())
  .then(result => {
    return res.status(200).json({
      result: decrypt(result.data,process.env.API_KEY)
  })
  })
  .catch(error => {
    return res.status(500).json({
      error: error
  })
  })
});


export default router;
