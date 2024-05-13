const User = require("../models/User");

module.exports.getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return next(err);
    }
    if (!users) {
        return res.status(500).json({ message: "Unexpected Error Occured" })
    }
    return res.status(200).json({ users })
};