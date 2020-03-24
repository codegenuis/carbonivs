import express from 'express';
import InvestmentService from '../services/InvestmentServices';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const investmentService = new InvestmentService();

const router = express.Router();

router.post('/', (req, res) => {
    investmentService.getAll(req.body.email).then((response) => {
        return res.status(200).json({
            data: response
        })
    })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error: error
            })
        });
});


export default router;
