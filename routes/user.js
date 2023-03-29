const express = require('express')
const router = express.Router()
// const path = require('path')
const User = require('../models/user')

router.post('/', async (req, res) => {
    try {
        let errorMessage = ""
        let data = req.body

        //VALIDATION
        if (data.name && data.email && data.password && data.contactNo && data.type) {
            if (!['student', 'teacher', 'admin'].includes(data.type)) errorMessage = "type should be any of the following - admin, student, teacher"
            else if (data.type !== 'admin') {    //if userType not admin, bloodGroup, class are required fields
                if (!data.bloodGroup || !data.class) errorMessage = "Field bloodGroup or class empty"
                if (data.type === 'student' && (!data.father || !data.mother)) errorMessage = "Field father or mother empty" //if userType is student, father and mother are required fields
            }
        }
        else errorMessage = "Fill all fields"
        //VALIDATION - END

        if (errorMessage) {
            res.status(400).send({message: errorMessage});
        }
        else {
            const user = new User(data)
            let insertId = await user.save()
            res.status(201).send(insertId);
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let user = await User.find({})
        res.json(user)
        // res.status(201).send(user)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let user = await User.find({ _id })
        res.json(user)
        // res.status(201).send(user)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.put('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let body = req.body
        let updatedData = { $set: body }
        let updated = await User.findByIdAndUpdate(_id, updatedData, { new: true })
        updated ? res.status(201).send(updated) : res.status(400).send({ message: "User Not Found with this id" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let deleted = await User.findByIdAndDelete({ _id })
        res.send(deleted)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router