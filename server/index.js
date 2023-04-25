import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js'; // in nodeJS we have to write full name of the file
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;
  // "mongodb+srv://trhonghai:hai35115442@cluster0.o7y3ioy.mongodb.net/?retryWrites=true&w=majority";
  
app.use(bodyParser.json({ limit: '30mb' }));

app.use(bodyParser.urlencoded({ extends: true, limit: '30mb' }));

app.use(cors());

app.use('/posts', posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    // when connected successfully is running server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
