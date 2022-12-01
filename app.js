const read = require('./read.js');
const create = require('./create.js');
const remove = require('./delete.js');
const update = require('./update.js')
const data = require('./data.json');
const command = process.argv[2];
const string = process.argv[3];
const newString = process.argv[4];

if (command === 'read') {
  read(data);
} else if (command === 'create') {
  create(data, string);
} else if (command === 'delete') {
  remove(data, string);
} else if (command === 'update') {
  update(data, string, newString);
}
