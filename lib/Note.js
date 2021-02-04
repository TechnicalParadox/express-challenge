const uniqid = require('uniqid');

class Note
{
  constructor(title, text)
  {
    this.title = title;
    this.text = text;
    this.id = uniqid(); 
  }
}

module.exports = Note;
