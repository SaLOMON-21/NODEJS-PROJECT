// file-operations.js
const fs = require('fs');

// Create a file named "welcome.txt" with content
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
if (err) throw err;
console.log('welcome.txt has been created with content: "Hello Node"');
});

// Read and console.log data from "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log('Data read from welcome.txt:', data);
});
