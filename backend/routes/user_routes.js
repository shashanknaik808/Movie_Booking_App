const express = require('express');
const { getAllUsers, singup, updateUser, deleteUser, login } = require('../controllers/user_controller');

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);

module.exports = userRouter;