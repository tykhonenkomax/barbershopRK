const Router = require('express').Router;
const { getBarbers } = require('../controllers/user-controller')

const router = new Router();

router.get("/find/barbers", getBarbers)

module.exports = router




