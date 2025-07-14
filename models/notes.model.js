
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  name: string,
  email: string,
  idea: string,
})

const noteModel = mongoose.model("note", noteSchema)
module.exports = noteModel