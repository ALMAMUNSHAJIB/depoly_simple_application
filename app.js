import express from "express";
import dotenv from 'dotenv';
import path from 'path'


const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//import db files
import connectDb from './db/connectDb.js';

//database connection
const DATABASE_URL = process.env.DATABASE_URL;
connectDb(DATABASE_URL);

//Static file join 
// app.use(express.static(join(process.cwd(), "public")));
app.use('/student',express.static(path.join(process.cwd(), "public")))
app.use('/student/edit',express.static(path.join(process.cwd(), "public")))
app.set('view engine', 'ejs')

//route file import 
import apiRouter from './routes/api.js';
//load routes
app.use('/student', apiRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is runing ${port}`)
});