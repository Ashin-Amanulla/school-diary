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
// app.use(helmet());
app.use(cors())
app.use(logger('dev'))
app.use(compression())

// for parsing application/json
app.use(express.json())
// for parsing application/xwww-form-urlencoded
app.use(express.urlencoded({extended:true}))

// for parsing multipart/form-data
app.use(express.static('public'));


// api 
app.use('/api/uploads', express.static('uploads'))  // for image and pdf reading

app.use('/api/pupils', require('./routes/pupils'))

app.use('/api/user', require('./routes/user'))
app.use('/api/class', require('./routes/class'))
app.use('/api/examTimeTable', require('./routes/examTimeTable'))
app.use('/api/remarks', require('./routes/remarks'))
app.use('/api/circular', require('./routes/circular'))




// port 
app.listen(PORT, () => { console.log(`Server is running at ${PORT}`) })
  