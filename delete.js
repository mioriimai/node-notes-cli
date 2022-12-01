const fs = require('fs');

function remove(data, string) {
delete data.notes[string];
data.nextId--;
fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
})
}

module.exports = remove;
