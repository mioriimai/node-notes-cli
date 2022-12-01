const fs = require('fs');
function update(data, string, newString) {
  data.notes[string] = newString;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  })
}

module.exports = update;
