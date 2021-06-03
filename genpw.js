// Assignment Code
var specialCharacter = '!@#$%^&*()_+=-';
var numericCharacter = '1234567890';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var emptyCharacter = "";
var generateBtn = document.querySelector("#generate");
var passwordStore = "";

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
generateBtn.addEventListener("click", function () {
  var length = prompt('How long would you like your password to be?')
  if (length < 8) {
    alert('Password length must be at least 8');
    return;
  }
  if (length > 128) {
    alert('Passwrod must be less that 129');
    return;
  }

  var hasSpecialCharacter = confirm(
    'Click ok to confirm special character'
  );
  var hasNumericCharacter = confirm(
    'Click ok to confirm numeric charactier'
  );
  var hasLowerCase = confirm(
    'Click ok to confirm lowercase character'
  );
  var hasUpperCase = confirm(
    'Click ok to confirm Uppercase character'
  );

  if (
    hasSpecialCharacter === false &&
    hasNumericCharacter === false &&
    hasLowerCase === false &&
    hasUpperCase === false
  ) {
    alert('Must be true');
    return;
  }

  if (hasSpecialCharacter) {
    emptyCharacter += specialCharacter
  }
  if (hasNumericCharacter) {
    emptyCharacter += numericCharacter
  }
  if (hasLowerCase) {
    emptyCharacter += lowerCase
  }
  if (hasUpperCase) {
    emptyCharacter += upperCase
  }
  var randomIndex = Math.floor(Math.random() * length);
  var randomCharacter = emptyCharacter[randomIndex]

  console.log(hasSpecialCharacter);
  console.log(hasNumericCharacter);
  console.log(hasLowerCase);
  console.log(hasUpperCase);
  console.log(emptyCharacter);

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * emptyCharacter.length);
    console.log(randomIndex);
    passwordStore = passwordStore + emptyCharacter[randomIndex];
  }

  document.getElementById("password").value = passwordStore;


  console.log(passwordStore);


});

var generatePassword = function () {

}
// When we click generate password. we ask the user how long we want the password to be.
