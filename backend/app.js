const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();


mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.dstwx2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => app.listen(5000))
    .then(() => console.log("Database is connected! Listening to localhost 5000"))
    .catch((err) => console.log(err));