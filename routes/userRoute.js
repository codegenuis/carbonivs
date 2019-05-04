import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User';

const router = express.Router();

router.get('/', (req, res) => {
  User.find().exec()
    .then((result) => {
      res.status(200).json({
        data: result,
      });
    });
});


router.post('/add', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    eligibility: req.body.eligibility,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    middlename: req.body.lastname,
    cardfirstname: req.body.cardFname,
    cardlastname: req.body.cardLname,
    cardmiddlename: req.body.cardMname
  });
  user.save()
    .then((result) => {
      res.status(201).json({
        message: 'Information Submitted'
      })
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    })
})

router.put('/edit/:id', (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).exec()
    .then((result) => {
      res.status(200).json({
        message: 'record updated',
      });
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    })
})

router.get('/user/:id', (req, res) => {
  User.findOne({ _id: req.params.id }).exec()
    .then((result) => {
      res.status(200).json({
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error,
      })
    })
});

export default router;
