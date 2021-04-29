// Assignment Code

//  Set Page Variables
let part1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let part2 = "abcdefghijklmnopqrstuvwxyz";
let part3 = "01234567890123456789";
let part4 = " !\"#$%& '()*+,-./:;<=>?@[\]^_`{|}~";

console.log(part4);


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {

}