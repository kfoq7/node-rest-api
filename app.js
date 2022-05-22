require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const dbConnect = require('./config/mongo')

const app = express()

app.use(express.json())
app.use(express.static('storage'))

app.use(cors())
app.use(morgan('dev'))

// Invoke routes here!
app.use('/api/v1', require('./routes'))

dbConnect()

app.listen(process.env.PORT, () => {
  console.log(`Starting development server at http://localhost:${process.env.PORT}`);
})
