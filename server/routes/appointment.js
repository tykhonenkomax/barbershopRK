const Router = require('express').Router;
const { createAppointment,deleteAppointment, getDatesByUserID } = require('../controllers/appointment-controller')

const router = new Router();

router.post("/", createAppointment);
router.delete("/:id", deleteAppointment);
router.get("/:id", getDatesByUserID);

module.exports = router

