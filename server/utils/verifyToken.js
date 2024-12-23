const JWT = require("jsonwebtoken")

const verifyToken = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'אינך מורשה!' })
        }

        JWT.verify(token, process.env.secretKey, (err, user) => {
            if (err)
                return res.status(401).json({ message: "האסימון אינו תקף!" })
            req.user = user;
            next();
        });
    } catch (e) {
        return res.status(401).json({ message: 'אינך מורשה!' })
    }
};

module.exports = {
    verifyToken
}