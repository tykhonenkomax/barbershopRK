const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const registration = async (req, res, next) => {
    try {        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.errors[0].msg)
        }

        const userEmail = await UserModel.findOne({ email: req.body.email });
        if (userEmail) {
            res.status(400).send(`משתמש עם כתובת האימייל ${req.body.email} כבר קיים במערכת`)
        }
        const hashPassword = await bcrypt.hash(req.body.password, 3);
        const user = await UserModel.create({ ...req.body, password: hashPassword })

        res.status(200).json({ user: user, message: "נרשמת בהצלחה." })
    } catch (err) {
        console.log(err);
    }
}

const login = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send(errors.errors[0].msg)
        }

        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send(`משתמש עם כתובת האימייל ${req.body.email} לא נמצא.`)
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).send(`הסיסמה שהוזנה אינה נכונה.`)
        }

        const token = jwt.sign({ id: user.id }, process.env.secretKey);

        res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json({ token, user: user })

    } catch (err) {
        console.log(err);
    }
}

const auth = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.user.id })
        const token = jwt.sign({ id: user.id }, process.env.secretKey, { expiresIn: "1h" })
        res
            .status(200)
            .json({ token, user: user })

    } catch (e) {
        res.send({ message: "Server error" })
    }
}

module.exports = {
    registration,
    login,
    auth
}