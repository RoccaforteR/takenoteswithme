const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to handle JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// HTML routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// API routes
app.get('/api/notes', (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  saveNote(newNote);
  res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  deleteNote(noteId);
  res.json({ message: 'Note deleted successfully.' });
});

// Function to read notes from db.json
const getNotes = () => {
  const data = fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8');
  return JSON.parse(data);
};

// Function to save a new note to db.json
const saveNote = (newNote) => {
  const notes = getNotes();
  newNote.id = generateUniqueId();
  notes.push(newNote);
  fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(notes));
};

// Function to delete a note by ID
const deleteNote = (noteId) => {
  let notes = getNotes();
  notes = notes.filter((note) => note.id !== noteId);
  fs.writeFileSync(path.join(__dirname, '/db/db.json'), JSON.stringify(notes));
};

// Function to generate a unique ID for a note
const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
