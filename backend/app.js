const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user_routes");
const adminRouter = require('./routes/admin_routes');

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter)

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.dstwx2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => app.listen(5000))
    .then(() => console.log("Database is connected! Listening to localhost 5000"))
    .catch((err) => console.log(err));