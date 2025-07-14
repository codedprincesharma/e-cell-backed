const express = require('express');
const app = express();
const connectDb = require('./src/db/db');
const noteModel = require('./models/notes.model');

app.use(express.json());
connectDb();

// Create Note
app.post('/note', async (req, res) => {
  try {
    const { name, email, idea } = req.body;
    if (!name || !email || !idea) {
      return res.status(400).json({ message: "Title and content are required." });
    }
    const note = await noteModel.create({ name, email, idea });
    res.status(201).json({
      message: "Note created successfully",
      note
    });
    console.log(note);
  } catch (error) {
    res.status(500).json({
      message: "Error creating note",
      error: error.message
    });
  }
});



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
