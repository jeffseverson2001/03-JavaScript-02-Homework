// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  let password = "";
  let allParts = [];

  let totalLength = window.prompt("How many characters do you want for your password?");
  if (totalLength < 8 || totalLength > 128 || totalLength === "" || isNaN(totalLength)) {
    alert("You MUST choose between 8 and 128 characters for your password.\nTry Again.");
    return password;
  }

  //  Collet Criteria for Password
  let useUpper = window.confirm("Would you like to include Uppercase letters?");
  let useLower = window.confirm("Would you like to include Lowercase letters?");
  let useNumber = window.confirm("Would you like to include Numeric characters?");
  let useSpecial = window.confirm("Would you like to include Special characters?");

  if (useUpper === false && useLower === false && useNumber === false && useSpecial === false) {
    alert("You MUST select at least one character type.\nTry Again.");
    return password;
  }

  console.log(totalLength);

  //  Set Password Part Strings
  let part1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let part2 = "abcdefghijklmnopqrstuvwxyz";
  let part3 = "01234567890123456789";
  let part4 = "!\"#$%& '()*+,-./:;<=>?@[\]^_`{|}~";

  //  Get even number of charaters selected
  let partDivider = 0;
  if (useUpper) { partDivider++; }
  if (useLower) { partDivider++; }
  if (useNumber) { partDivider++; }
  if (useSpecial) { partDivider++; }

  let totalParts = totalLength / partDivider;

  for (let j = 0; j < totalParts; j++) {
    if (useUpper) {
      allParts.push(part1.charAt(Math.floor(Math.random() * part1.length)));
    }
    if (useLower) {
      allParts.push(part2.charAt(Math.floor(Math.random() * part2.length)));
    }
    if (useNumber) {
      allParts.push(part3.charAt(Math.floor(Math.random() * part3.length)));
    }
    if (useSpecial) {
      allParts.push(part4.charAt(Math.floor(Math.random() * part4.length)));
    }

  }

  //  Shuffle the order all characters
  let partsLength = allParts.length;
  let shuffledParts = allParts.sort(() => Math.random() - 0.5);

  //  Convert Array to String
  let stringParts = shuffledParts.join("");

  //  Size String to requested character length
  if (totalLength > partsLength) {
    var useParts = partsLength;
  } else {
    var useParts = totalLength;
  }

  password = stringParts.substring(0, useParts);

  return password;
}