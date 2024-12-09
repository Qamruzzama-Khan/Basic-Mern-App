import express from "express";
import cors from "cors";
import dotenv from 'dotenv'

const app = express();

dotenv.config({
  path: './.env'
})

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))  

app.get('/', (req, res) => {
    res.send("This is a basic full stack app.")
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});