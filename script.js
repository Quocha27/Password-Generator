// Assignment Code
var generateBtn = document.querySelector("#generate");
let specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (uppercase===true) {
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

  passwordText.value = password;
}

function generatePassword() {
var passwordLength =window.prompt("please t")

}
// Add event listener to generate button
generateBtn.addEventListener("click", function(){

// When we click generate password. we ask the user how long we want the password to be.
var length = window.prompt("how many characters would you like your password to be?");
var uppercase = window.confirm()
});