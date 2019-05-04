import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';


const app = express();
const port = 8082;
app.use(cors());
dotenv.config();

mongoose.connect(`mongodb+srv://charlesosegi:${process.env.MLAB_PW}@cluster0-fgyin.mongodb.net/demo?retryWrites=true`,
  { useNewUrlParser: true,useFindAndModify: false  });

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1/user', userRoute);

app.listen(process.env.PORT || port);

export default app
