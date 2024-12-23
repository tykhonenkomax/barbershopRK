const Router = require('express').Router;
const { registration, login, auth } = require('../controllers/auth-controller')
const { check } = require('express-validator')
const { verifyToken } = require('../utils/verifyToken')

const router = new Router();

router.post("/registration",
    check('email', "שגיאה: נדרש כתובת אימייל.").notEmpty(),
    check('email', "שגיאה: אימייל שגוי.").isEmail(),
    check('password', "שגיאה: הסיסמה נדרשת.").notEmpty(),
    check('password', "שגיאה: הסיסמה חייבת להיות יותר מ-3 ופחות מ-16 תווים.").isLength({ min: 2, max: 16 }),
    check('phone', "שגיאה: מספר טלפון שגוי.").isNumeric(),
    registration);

router.post("/login",
    check('email', "שגיאה: נדרש כתובת אימייל.").notEmpty(),
    check('email', "שגיאה: אימייל שגוי.").isEmail(),
    check('password', "שגיאה: הסיסמה נדרשת.").notEmpty(),
    login);

router.get('/auth', verifyToken, auth);
module.exports = router

