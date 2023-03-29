const express = require('express')
const router = express.Router()
// const path = require('path')
const ExamTimetable = require('../models/examTimetable')

router.post('/', async (req, res) => {
    try {
        let data = req.body

        if (data.title && data.subjects && data.class) {
            const examTimetable = new ExamTimetable(data)
            let insertId = await examTimetable.save()

            res.status(201).send(insertId);
        }
        else res.status(400).json({message: "All fields are required"});
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let examTimetable = await ExamTimetable.find({})
        res.json(examTimetable)
        // res.status(201).send(examTimetable)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        let params = req.params
        let _id = params._id
        let examTimetable = await ExamTimetable.find({ _id })
        res.json(examTimetable)
        // res.status(201).send(examTimetable)
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
        let updated = await ExamTimetable.findByIdAndUpdate(_id, updatedData, { new: true })
        updated ? res.status(201).send(updated) : res.status(400).send({ message: "Timetable Not Found with this id" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let deleted = await ExamTimetable.findByIdAndDelete({ _id })
        res.send(deleted)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router