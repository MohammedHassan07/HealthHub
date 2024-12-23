const jwt = require('jsonwebtoken')

function verify_jwt_token(req, res, next) {

    try {

        const user_token = req.headers.token
        // console.log(user_token)

        if (!user_token) {

            res.status(402).json({ flag: false, message: 'Something went wrong, Login again' })
            return
        }

        const verified_token = jwt.verify(user_token, process.env.JWT_SECRET_KEY)
        // console.log(verified_token)

        if (!verified_token) {

            res.status(402).json({ flag: false, message: 'Something went wrong, Login again' })
            return
        }

        req.id = verified_token.user_id
        // console.log(verified_token)
        next()

    } catch (error) {
        console.log(error)
        res.status(500).json({ flag: false, message: 'Internal Server Error' })
    }
}

module.exports = { verify_jwt_token }