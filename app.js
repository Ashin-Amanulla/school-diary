const express = require('express')
const app = new express()
const helmet = require("helmet");
const cors = require('cors')
const logger =require('morgan')
const compression = require('compression')
const PORT = 3400 || process.env.PORT

// require('dotenv').config() //environmental variables
require('./config/init_mongodb.js') //DB initialisation


//middleware
app.use(helmet({crossOriginResourcePolicy: false}));
app.use(cors())
app.use(logger('dev'))
app.use(compression())

// for parsing application/json
app.use(express.json())
// for parsing application/xwww-form-urlencoded
app.use(express.urlencoded({extended:true}))

// for parsing multipart/form-data
app.use(express.static('public'));



// routeHandler 
app.use('/api',require('./routes'))



// port 
app.listen(PORT, () => { console.log(`Server is running at ${PORT}`) })
  