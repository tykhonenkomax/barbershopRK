const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    avatar: { type: String },
    isBarber: { type: Boolean, default: false },
    unavailableDates: { type: [Date] }
}, { timestamps: true })

module.exports = model('User', UserSchema);