const express = require('express');
const { getAllUsers, singup } = require('../controllers/user_controller');

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", singup);

module.exports = userRouter;