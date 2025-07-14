const mongoose = require('mongoose')
const connectDb = () => {
  mongoose.connect('mongodb+srv://hitprinceraj:xUbOMXsEryDqeZh5@cluster0.ev75loa.mongodb.net/').then(() => {
    console.log('connect db');
  })
}

module.exports =connectDb