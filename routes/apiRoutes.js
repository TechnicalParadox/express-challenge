const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const Note = require(path.join(__dirname, '../lib/Note.js'));

router.get('/notes', (req, res) =>
{
  let notes;
  notes = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  notes = JSON.parse(notes);
  res.json(notes);
});

router.post('/notes', (req, res) =>
{
  let body = req.body;
  console.log('body', body);
  let newNote = new Note(body.title, body.text);
  let notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
  notes.push(newNote);
  fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) =>
  {
    if (err) throw err;
    console.log('Added note', newNote);
  });
  res.json(newNote);
});

module.exports = router;
