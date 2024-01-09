const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/WebApp'

mongoose.connect(url)

const db = mongoose.connection


db.once('open', function () {
  console.log('Connected to Database :: MongoDB')
});

module.exports = db