const express = require('express')
const router = express.Router()
const PUPIL = require('../models/pupil')


// Adding pupil data 
router.post('/', async (req, res) => {
    try {
        let item = req.body
        if (item == null) throw ('No data') //error if data is null

        const data = new PUPIL(item)
        await data.save()

        res.json({ message: 'Data saved successfully',status:true }).status(201)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error , status:false }).status(400)
    }
})


// Reading all pupil data 
router.get('/', async (req, res) => {
    try {
        let list = await PUPIL.find({})
        res.json({ message: 'success', data: list,status:true }).status(200)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
    }
})

// Reading one pupil data 

router.get('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let userOne = await PUPIL.find({ _id: _id })
        res.json({ message: 'success', data: userOne , status:true}).status(200)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
    }
})

// Updating one 

router.put('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let body = req.body
        let updatedData = { $set: body }
        await PUPIL.findByIdAndUpdate(_id, updatedData, { new: true })
        res.json({ message: 'updated successfully!!' , status:true }).status(200)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
    }
})


// deleting one 
router.delete('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let deleted = await User.findByIdAndDelete({ _id })
        res.json({ message: 'deleted successfully!!' , status:true }).status(200)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)    }
})

module.exports = router