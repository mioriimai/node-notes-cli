//node app.js read


const fs = require('fs');
const data = require('./data.json');
const command = process.argv[2];

if (command === 'read') {
  for(let key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

if (command === 'add') {}
