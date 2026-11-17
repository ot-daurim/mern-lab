import 'dotenv/config';
import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes.js';

const app = express();
const PORT = process.env.PORT || 3030;

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/blog_lab');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
routes(app);

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});