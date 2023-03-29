const express = require('express')
const router = express.Router()
// const path = require('path')
const Circular = require('../models/circular')

router.post('/', async (req, res) => {
    try {
        let errorMessage = ""
        let data = req.body

        //VALIDATION
        // title message date type class
        if (data.title && data.message && data.date && data.class && data.type) {
            if (!['circular', 'events', 'assignment'].includes(data.type)) errorMessage = "type should be any of the following - 'circular', 'events', 'assignment'"
        }
        else errorMessage = "Fill all fields"
        //VALIDATION - END

        if (errorMessage) {
            res.status(400).send({message: errorMessage});
        }
        else {
            const circular = new Circular(data)
            let insertId = await circular.save()
            res.status(201).send(insertId);
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let circular = await Circular.find({})
        res.json(circular)
        // res.status(201).send(circular)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let circular = await Circular.find({ _id })
        res.json(circular)
        // res.status(201).send(circular)
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
        let updated = await Circular.findByIdAndUpdate(_id, updatedData, { new: true })
        updated ? res.status(201).send(updated) : res.status(400).send({ message: "Circular Not Found with this id" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let deleted = await Circular.findByIdAndDelete({ _id })
        res.send(deleted)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router