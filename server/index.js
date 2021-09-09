import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit:'50mb',extended:true}));
app.use(cors());

const PORT = 5000;

const mongoUrl = process.env.CONNECTION_URL;
mongoose.connect(mongoUrl)
.then
   try {
    console.log("Connected to MongoDb");
} catch (error) {
    console.log(error.message);
}

app.listen(PORT,(req,res)=>{
    console.log(`Successfully connected to Port ${PORT}`);
});