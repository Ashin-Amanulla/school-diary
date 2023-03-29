const express = require('express')
const router = express.Router()
// const path = require('path')
const Remark = require('../models/remarks')

router.post('/', async (req, res) => {
    try {
        let data = req.body
        console.log(data)
        
        if (data.title && data.message && data.date && data.teacherId &&  data.studentId) {
            const remarks = new Remark(data)
            let insertId = await remarks.save()
            res.status(201).send(insertId);
        }
        else res.status(400).send("Fill in all fields")
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let remarks = await Remark.find({})
        res.json(remarks)
        // res.status(201).send(remarks)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let remarks = await Remark.find({ _id })
        res.json(remarks)
        // res.status(201).send(remarks)
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
        let updated = await Remark.findByIdAndUpdate(_id, updatedData, { new: true })
        updated ? res.status(201).send(updated) : res.status(400).send({ message: "Remark Not Found with this id" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let deleted = await Remark.findByIdAndDelete({ _id })
        res.send(deleted)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router