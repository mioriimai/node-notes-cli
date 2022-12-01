function read(data) {
  for (let key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

module.exports = read;
