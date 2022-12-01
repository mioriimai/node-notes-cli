const fs = require('fs');

function create(data, string) {
data.notes[data.nextId] = string;
data.nextId++;
fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
})
}
module.exports = create;
