// Assignment Code
const specialCharactersArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
const generateBtn = document.querySelector("#generate");
const emptyArr = [];
generateBtn.addEventListener('click', writePassword)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button and Prompts
function generatePassword() {
var passwordLength = window.prompt("How many characters would you like your password to be?");
var upperCase = window.confirm("Click OK to confirm uppercase characters");
var lowerCase = window.confirm("Click OK to confirm lowercase characters");
var specialCharacters = window.confirm("Click OK to confirm special characters");
var numberic = window.confirm("Click OK to confirm numeric characters");


if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  console.log("Conditions are not met");
 }

if (upperCase===true) {
  for (let i = 0; i < upperCase; i++) {
emptyArr.push (String.fromCharCode(Math.floor(Math.random()*26)+65)); 
  }
 }

if (lowerCase===true) {
  for (let i = 0; i < lowerCase; i++) {
emptyArr.push (String.fromCharCode(Math.floor(Math.random()*26)+97));
 }
}

if (specialCharacters===true) {
  emptyArr.push(...specialCharactersArr)
}

if (numberic===true) {
  console.log(emptyArr);
  for (let i = 0; i < numberic; i++) {
emptyArr.push (String.fromCharCode(Math.floor(Math.random()*10) +48));
}
}

// empty string var for the loop below
var randomPasswordGenerated = "";

//loop 
for (let i = 0; i < passwordLength; i++) {
var randomNumberPicked = Math.floor(Math.random() * 4);

 randomPasswordGenerated += randomNumberPicked;
}

randomPasswordGenerated || randomNumberPicked;
randomPasswordGenerated || upperCase;
randomPasswordGenerated || lowerCase;
randomPasswordGenerated || numberic;

return randomPasswordGenerated;
}