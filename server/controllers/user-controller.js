const UserModel = require('../models/user-model')

const getBarbers = async (req, res, next) => {
    try {
       const barbers = await UserModel.find({isBarber : true})
       if (!barbers) {
        res.status(400).send(`אין barbers במערכת`)
    }
       res.status(200).json({ barbers: barbers})  
    } catch (err) {
        next(err);
    }
}

module.exports = { 
    getBarbers
}