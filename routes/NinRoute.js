import express from 'express';
import HttpService from '../services/HttpService';
import {decrypt} from '../utils/encdec';
import dotenv from 'dotenv';

dotenv.config();

const httpService = new HttpService();

const router = express.Router();

router.get('/:id', (req, res) => {
  var payload = {
    identification_type: "nimcslip",
    identification_number: req.params.id,
    identification_name: "Lekan David",
    identification_dob: "1960-09-01"
  }
  httpService.getNIN(payload)
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
