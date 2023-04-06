const express = require('express')
const router = express.Router()
const NOTICE = require('../models/announcement')


router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        if (req.body == null) throw ('No data') //error if data is null


        let item ={
            description:req.body.description,
            type:req.body.type
        }

        const data = new NOTICE(item)
        await data.save()

        res.json({ message: 'Data saved successfully',status:true }).status(201)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error , status:false }).status(400)
    }
})


// Reading all NOTICE data 
router.get('/', async (req, res) => {
    try {
        let list = await NOTICE.find({}).sort({_id:-1})
        res.json({ message: 'success', data: list,status:true }).status(200)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
    }
})

// Reading one NOTICE data 

router.get('/:_id', async (req, res) => {
    try {
        let _id = req.params._id
        let userOne = await NOTICE.find({ _id: _id })
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
        await NOTICE.findByIdAndUpdate(_id, updatedData, { new: true })
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
        let deleted = await NOTICE.findByIdAndDelete({ _id })
        res.json({ message: 'deleted successfully!!' , status:true }).status(200)
    }
    catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)    }
})

module.exports = router