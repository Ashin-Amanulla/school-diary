const JWT = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {
    signAccessToken: (user) => {
        return new Promise((resolve, reject) => {

            const payload = user

            const secret = 'process.env.ACCESS_TOKEN_SECRET'

            // const options = {
            //     expiresIn: '1hr', 
            //     issuer: 'ict-academy.com',
            //     audience: userId
            // }



            JWT.sign(payload, secret,  (err, token) => {
                if (err) {
                    console.log(err.message)
                    return reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },

    verifyAccessToken: (req, res, next) => {
        if (!req.headers['authorization']) {
            return next(createError.Unauthorized())
        }

        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        JWT.verify(token, 'process.env.ACCESS_TOKEN_SECRET', (err, payload) => {
            if (err) {
                const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
                return next(createError.Unauthorized(message))
            }

            req.payload = payload
            next();
        })

    }





}