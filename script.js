// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  
  var resultArray = [];
  var userArray = [];

  varnumberChars = prompt ("What length do you want your password between 8 and 128");
  var numberChars = confirm ("Do you want numbers in your password?");
  var upperChars = confirm ("Do you want Uppercases in your password?");
  var lowerChars = confirm ("Do you want Lowercases in your password?");
  
  if (numberChars) {
    resultArray = resultArray.concat(numberChars);
  }

  if (upperChars) {
    resultArray = resultArray.concat(upperChars);
  }

  if (lowerChars) {
    resultArray = resultArray.concat(lowerChars);
  }
  console.log(resultArray)

  for (var i = 0; i < numberChars; i++) {
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  return userArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);