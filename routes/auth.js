const express = require('express')
const router = express.Router()
const PUPIL = require('../models/pupil')
const {signAccessToken} = require('../middlewares/jwt_helper')
var createError = require('http-errors')

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        if (req.body == null) throw ('No data') //error if data is null


        let item = {
            email: req.body.email,
            password: req.body.password
        }
        //? For teacher
        if (item.email.trim() == 'teacher@classtrackr.com' && item.password.trim() == 'teacher@123') {
            const user = { email: item.email, admin: true,login:true }
            const accessToken = await signAccessToken(user)
            res.json({ token: accessToken, status: true }).status(201)

        }
        else {
            // to check user is present 
            const pupil = await PUPIL.findOne({ email: item.email })
            if (!pupil) throw createError.Unauthorized('Email is invalid')
            // to check the password is correct 
            const isMatch = await pupil.isValidPassword(item.password)
            if (!isMatch) throw createError.Unauthorized('password is invalid')


            const user = { email: item.email, admin: false,login:true }

            const accessToken = await signAccessToken(user)
            res.json({ token: accessToken, status: true }).status(201)
        }

    }
    catch (error) {
        console.log('errore',error.status)
        if(error.status === 401){
            res.json({ error: error.message, status: error.status })
        }else{
            res.json({ error: error, status: false }).status(400)

        }
    }
})



module.exports = router