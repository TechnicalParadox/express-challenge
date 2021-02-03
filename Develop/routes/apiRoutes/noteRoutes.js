const router = require('express').Router();
const fs = require('fs');
const Note = require(path.join(__dirname, '../../lib/Note.js'));

router.get('/api/notes', (req, res) =>
{
  let notes = fs.readFile(path.join(__dirname, '../../db/db.json'));
  res.json(notes);
});

router.post('/api/notes', (req, res) =>
{
  let body = req.body;
  let newNote = new Note(body.title, body.text);
  let notes = JSON.parse(fs.readFile(path.join(__dirname, '../../db/db.json')));
  notes.push(newNote);
  fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes), (err) =>
  {
    if (err) throw err;
    console.log('Added note', newNote);
  });
})
