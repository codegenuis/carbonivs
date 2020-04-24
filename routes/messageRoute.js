import express from 'express';
import MessageService from '../services/MessageService';

const messageService = new MessageService();

const router = express.Router();

router.get('/:email', (req, res) => {
    messageService.getAll(req.params.email).then((response) => {
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
