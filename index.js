import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import farmsRoute from './routes/farmsRoute';
import transRoute from './routes/transRoute';
import investmentRoute from './routes/investmentRoute';
import withdrawalRoute from './routes/withdrawalRoute';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './connection';


const app = express();
const port = 8082;
app.use(cors());
dotenv.config();


connection.connect((err) => {
  if(err){
    throw err;
  }
  console.log('conneted')
})

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1/user', userRoute);
app.use('/api/v1/farms', farmsRoute);
app.use('/api/v1/transaction',transRoute);
app.use('/api/v1/investment',investmentRoute);
app.use('/api/v1/withdrawal',withdrawalRoute);

app.listen(process.env.PORT || port);

export default app
