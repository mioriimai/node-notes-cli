const fs = require('fs');
const data = require('./data.json');
const command = process.argv[2];
const string = process.argv[3];
const newString = process.argv[4];

if (command === 'read') {
  for(let key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (command === 'create') {
  data.notes[data.nextId] = string;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
} else if (command === 'delete') {
  delete data.notes[string];
  data.nextId--;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
} else if (command === 'update') {
  data.notes[string] = newString;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
}
