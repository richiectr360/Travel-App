const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require("../model/user.model");

const loginController = async (res, req) => {
    try {
        const number = await User.findOne({ number: req.body.number })
        !number && res.status(401).json({ message: "Invalid Mobile Number" });

        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
        console.log(decodedPassword);
        decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});

        const {password, ...rest} = user._doc;
        const accessToken = jwt.sign({ username: user.username}, process.env.ACCESS_TOKEN);

        res.json({...rest, accessToken});

    } catch(err) {
        console.log(err);
    }
}

module.exports = loginHandler;