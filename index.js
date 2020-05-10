import express from 'express';
import bodyParser from 'body-parser';
import LicenceRoute from './routes/LicenceRoute';
import BvnRoute from './routes/BvnRoute';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const port = 8084;
app.use(cors());
dotenv.config();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1/licence', LicenceRoute);

app.use('/api/v1/bvn', BvnRoute);

app.listen(process.env.PORT || port);

export default app
