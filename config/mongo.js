const mongoose = require('mongoose')

const dbConnect = () => {
  const DB_URI = process.env.DB_URI

  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err, res) => {
    if (err) console.error('Error to connect', err)
    console.log('Connected to mongodb');
  })
}

module.exports = dbConnect
