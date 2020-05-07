import {encrypt, decrypt} from '../utils/encdec';
import axios from 'axios';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

export default class HttpService {
    getLicence(payload) {
      let encryptedData = encrypt(payload,process.env.API_KEY)
      var body = {
        key: process.env.MERCHANT_ID,
        data: encryptedData
      }
      return fetch('https://carbonivs.co/api/verify', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
      })
    }
}