const express = require('express')
const router = express.Router()
// const path = require('path')
const Classes = require('../models/class')

router.post('/', async (req, res) => {
    try {
        let data = req.body

        if (data.title) {
            const classes = new Classes(data)
            let insertId = await classes.save()

            res.status(201).send(insertId);
        }
        else res.status(400).json({message: "Title field is required"});
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let classes = await Classes.find({})
        res.json(classes)
        // res.status(201).send(classes)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let classes = await Classes.find({ _id })
        res.json(classes)
        // res.status(201).send(classes)
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
        let updated = await Classes.findByIdAndUpdate(_id, updatedData, { new: true })
        updated ? res.status(201).send(updated) : res.status(400).send({ message: "Classes Not Found with this id" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let deleted = await Classes.findByIdAndDelete({ _id })
        res.send(deleted)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router