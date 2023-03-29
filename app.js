const express = require('express')
const app = new express()
const helmet = require("helmet");
const cors = require('cors')
const logger =require('morgan')
const compression = require('compression')
const PORT = 3400 || process.env.PORT

// require('dotenv').config() //environmental variables
require('./config/init_mongodb.js') //DB initialisation

// app.use(helmet());
// app.use(cors())
// app.use(logger('dev'))
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(compression())

app.use('/api/user', require('./routes/user'))
app.use('/api/class', require('./routes/class'))
app.use('/api/examTimeTable', require('./routes/examTimeTable'))
app.use('/api/remarks', require('./routes/remarks'))
app.use('/api/circular', require('./routes/circular'))



app.listen(PORT, () => { console.log(`Server is running at ${PORT}`) })
  