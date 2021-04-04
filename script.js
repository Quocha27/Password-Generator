// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  console.log("im working")

}
// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  var value = window.prompt("What is your name?")
  console.log(value);
});

var generatePassword = function() {
  
}
// When we click generate password. we ask the user how long we want the password to be.
