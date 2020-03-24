import express from 'express';
import WithdrawalService from '../services/WithdrawalService';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const withdrawalService = new WithdrawalService();

const router = express.Router();

router.post('/request', (req, res) => {
    withdrawalService.create(req.body).then((response) => {
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


router.post('/', (req, res) => {
    withdrawalService.getAll(req.body.email).then((response) => {
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
