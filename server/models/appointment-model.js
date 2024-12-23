const { Schema, model } = require('mongoose')

const AppointmentSchema = new Schema({
    userID : { type: String },
    barberID: { type: String },
    serviceID: { type: String },
    dateTime: {type: Date}   
}, { timestamps: true })

module.exports = model('Appointment', AppointmentSchema);