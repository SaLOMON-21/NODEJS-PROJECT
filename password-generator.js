// password-generator.js
const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
const password = generatePassword.generate({
    length: 12,  // You can adjust the length as needed
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true,
});

console.log('Generated Password:', password);
}

generateRandomPassword();
