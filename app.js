//node app.js read

const fs = require('fs');
const data = require('./data.json');
const command = process.argv[2];

if (command === 'read') {
  console.log('test');
  console.log(data.notes);
}

a();
