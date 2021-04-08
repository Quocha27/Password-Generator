// Assignment Code
const specialCharacters = "!@#$%^&*()";
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', writePassword)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
function generatePassword() {


// Prompts
var passwordLength = window.prompt("how many characters would you like your password to be?");
var upperCase = window.confirm("Ckick OK to confirm uppercase characters");
var lowerCase = window.confirm("Ckick OK to confirm lowercase characters");
var specialCharacters = window.confirm("Ckick OK to confirm special characters");
var numberic = window.confirm("Ckick OK to confirm numeric characters");

if (passwordLength===true) {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
if (upperCase===true) {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
if (lowerCase===true) {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
if (specialCharacters===true) {
  return specialCharacters[Math.floor(Math.random()*symbols.length)];
}
if (numberic===true) {
  return Math.floor(Math.random() *10);
}
};

var randomPasswordGenerated ="";

for (var i = 0; i < 100; i++ ) {
var randomPasswordGenerated = Math.floor(Math.random() * 4);
randomPasswordGenerated += ran

return randomPasswordGenerated;}