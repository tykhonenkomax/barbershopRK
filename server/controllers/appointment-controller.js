const UserModel = require('../models/user-model')
const AppointmentModel = require('../models/appointment-model')

const createAppointment = async (req, res, next) => {
    try {
        const barberId = req.body.barberID;
        const newAppointment = new AppointmentModel(req.body)

        try {
            const savedAppointment = await newAppointment.save();
            try {
                await UserModel.findByIdAndUpdate(barberId, {
                    $push: { unavailableDates: req.body.dateTime },
                });
            } catch (err) {
                next(err)
            }
            res.status(200).json({ appointment: savedAppointment, message: "הזמנת תור בהצלחה." })
        } catch (err) {
            next(err);
        }

    } catch (err) {
        console.log(err);
    }
}

const deleteAppointment = async (req, res, next) => {
    try {
        await AppointmentModel.findOneAndDelete({ dateTime: req.params.id });
        await UserModel.findOneAndUpdate({ unavailableDates: req.params.id }, { $pull: { unavailableDates: req.params.id } });

        res.status(200).json("בטלת תור בהצלחה.")
    } catch (err) {
        next(err);
    }
}

const getDatesByUserID = async (req, res, next) => {
    try {
        const appointment = await AppointmentModel.find({ userID: req.params.id });
        const user = await UserModel.findById(req.params.id);
        if (!appointment || !user)
            res.status(400).json({ message: "אין תורים קרובים." })

        res.status(200).json({ appointment: appointment, unavailableDates: user.unavailableDates })
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createAppointment,
    deleteAppointment,
    getDatesByUserID
}