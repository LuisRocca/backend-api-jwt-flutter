import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './routes';
// import { MongoClient, ServerApiVersion } from 'mongodb';

require('dotenv').config();
process.env.TZ = 'America/Guayaquil'; // zona horaria de la app

const app = express();
// const url = 'mongodb+srv://firtsappfluttermongodb.utcthse.mongodb.net/test'
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

// public files
app.use(express.static('public'));

const PORT = process.env.PORT || 9000;

mongoose
.connect(process.env.MONGO!, {})
.then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(`error to trying connected to mongodb ${e}`);
  });

  api(app);




