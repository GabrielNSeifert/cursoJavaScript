const multiplicação = require('./mod1');

console.log(multiplicação(2,2));

console.log(__filename);
console.log(__dirname);

const path = require('path');
console.log(path.resolve(__dirname, '..', '..')); // Volta dois caminhos  ..  ..
