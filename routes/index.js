const express = require('express')
const router = express.Router()

// api 
router.use('/uploads', express.static('uploads'))  // for image and pdf reading

router.use('/pupils', require('./pupils'))

router.use('/remarks', require('./remarks'))

router.use('/comments', require('./comments'))


router.use('/announcements', require('./announcements'))



module.exports = router