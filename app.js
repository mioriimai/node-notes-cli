//node app.js read


const fs = require('fs');
const data = require('./data.json');
const command = process.argv[2];
const string = process.argv[3];

if (command === 'read') {
  for(let key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (command === 'create') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      process.exit(1);
    });
  fs.writeFile('data.json', string, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    data.notes.nextId = string;
    data.nextId++;
  })

}
