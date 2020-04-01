import express from 'express';
import PostService from '../services/PostService';
import dotenv from 'dotenv';
import axios from 'axios';


dotenv.config();

const postService = new PostService();

const router = express.Router();

router.get('/', (req, res) => {
  postService.getAll()
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




export default router;
