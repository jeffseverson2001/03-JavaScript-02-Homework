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
  // alert("Hello");

  let password = "";

  let lengthPart = prompt("How many characters do you want for your password?");
  if (lengthPart < 8 || lengthPart > 128 || lengthPart === "") {
    alert("You must choose between 8 and 128 characters for your password.\nTry Again.");
    return password;
  }

  //  Collet Criteria for Password
  let useUpper = confirm("Would you like to include Uppercase letters?");
  let useLower = confirm("Would you like to include Lowercase letters?");
  let useNumber = confirm("Would you like to include Numeric characters?");
  let useSpecial = confirm("Would you like to include Special characters?");

  console.log(lengthPart);

  let partsArray = [lengthPart, useUpper, useLower, useNumber, useSpecial];

  console.log(partsArray);

  password = createPassword(partsArray);
  return password;
}



function createPassword(criteria) {

  let upperParts = [];
  let lowerParts = [];
  let numberParts = [];
  let specialParts = [];

  //  Set Password Part Strings
  let part1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let part2 = "abcdefghijklmnopqrstuvwxyz";
  let part3 = "01234567890123456789";
  let part4 = "!\"#$%& '()*+,-./:;<=>?@[\]^_`{|}~";

  let partDivider = 0;

  if (criteria[1]) {
    partDivider++;
  }
  if (criteria[2]) {
    partDivider++;
  }
  if (criteria[3]) {
    partDivider++;
  }
  if (criteria[4]) {
    partDivider++;
  }

  let totalParts = criteria[0] / partDivider;
  let totalPartsDivider = Math.floor(totalParts);

  for (var j = 0; j < criteria[0]; j++) {
    if (criteria[1]) {
      upperParts.push(part1.charAt(Math.floor(Math.random() * part1.length)));
    }
    if (criteria[2]) {
      lowerParts.push(part2.charAt(Math.floor(Math.random() * part2.length)));
    }
    if (criteria[3]) {
      numberParts.push(part3.charAt(Math.floor(Math.random() * part3.length)));
    }
    if (criteria[4]) {
      specialParts.push(part4.charAt(Math.floor(Math.random() * part4.length)));
    }

  }

  /*
  if (criteria[1]) {
    for (var i = 0; i < totalPartsDivider; i++) {
      upperParts.push(part1.charAt(Math.floor(Math.random() *
        part1.length)));
    }
  }
  */

  console.log(upperParts);
  console.log(lowerParts);
  console.log(numberParts);
  console.log(specialParts);

  /*
    console.log(part1.length);
    console.log(part1);
  
    console.log(part2.length);
    console.log(part2);
  
    console.log(part3.length);
    console.log(part3);
  
    console.log(part4.length);
    console.log(part4);
  
  */

  let randomPart1 = Math.random() * criteria[0];
  let randomPart2 = Math.floor(Math.random() * criteria[0]) + 1;
  console.log(randomPart1);
  console.log(randomPart2);
  /*
    for (var i = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
    */

  let password = "TheBirdIsTheWord";

  return password;
}