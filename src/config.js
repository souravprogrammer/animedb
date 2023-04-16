import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
const app = express();

async function connectDataBase() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected...");
  } catch (err) {
    console.log("Database Error", err.message);
  }
}

connectDataBase();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

export default app;
