import express, { Request, Response } from "express";
// import { postDatamongoDB } from "./database/data";
import { router } from "./routes/routes";
// import { router } from "../scr/routes/routes";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const app = express();
///adding url
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URL as string,
  {
    useUnifiedTopology: true,
    useNewUrlParser:true
  },
  () => {
    console.log("Db Connected !!!!!!")
  }
)



app.use("/",router)
app.listen(8070, () => {
  console.log("server is running at 8070")
})