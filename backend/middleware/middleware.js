const jwt = require('jsonwebtoken')
require('dotenv').config();


const auth = (req, res, next) => {

    const token = req.cookies.token

    if (!token) {
        return res.send('Please Login First')
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()

    } catch (error) {
        res.send('Invalid Token')
    }
}

module.exports = auth