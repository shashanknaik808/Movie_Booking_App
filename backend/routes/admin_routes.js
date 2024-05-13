const express = require("express");
const { addAdmin } = require("../controllers/admin_controller");

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);

module.exports = adminRouter;