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

  let totalLength = window.prompt("How many characters do you want for your password?");
  if (totalLength < 8 || totalLength > 128 || totalLength === "" || isNaN(totalLength)) {
    alert("You must choose between 8 and 128 characters for your password.\nTry Again.");
    return password;
  }

  //  Collet Criteria for Password
  let useUpper = window.confirm("Would you like to include Uppercase letters?");
  let useLower = window.confirm("Would you like to include Lowercase letters?");
  let useNumber = window.confirm("Would you like to include Numeric characters?");
  let useSpecial = window.confirm("Would you like to include Special characters?");

  console.log(totalLength);

  let partsArray = [totalLength, useUpper, useLower, useNumber, useSpecial];

  console.log(partsArray);

  password = createPassword(partsArray);
  return password;
}



function createPassword(criteria) {

  let allParts = [];
  let indexList = [];
  let passwordString = [];

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
  // let totalPartsDivider = Math.floor(totalParts);


  for (let j = 0; j < totalParts; j++) {
    if (criteria[1]) {
      allParts.push(part1.charAt(Math.floor(Math.random() * part1.length)));
    }
    if (criteria[2]) {
      allParts.push(part2.charAt(Math.floor(Math.random() * part2.length)));
    }
    if (criteria[3]) {
      allParts.push(part3.charAt(Math.floor(Math.random() * part3.length)));
    }
    if (criteria[4]) {
      allParts.push(part4.charAt(Math.floor(Math.random() * part4.length)));
    }

  }

  console.log(allParts);

  let partsLength = allParts.length;

  if (criteria[0] > partsLength) {
    var useParts = partsLength;
  } else {
    var useParts = criteria[0];
  }

  for (let i = 0; i < useParts; i++) {
    indexList.push(i).charAt;
  }

  console.log(indexList);

  let shuffled = indexList.sort(() => Math.random() - 0.5);

  console.log(shuffled);

  for (let i = 0; i < useParts; i++) {
    passwordString = passwordString.concat(allParts.shuffled);
  }

  console.log(passwordString);

  //var x = fruits.toString();


  /*
  let shuffleParts = "";
  let checkIndex = 0;
 
  if (checkIndex === ) {
 
  }
  Math.floor(Math.random() * criteria[0]) + 1;
*/
  //console.log("After: " + finalPass);


  /*
  if (criteria[1]) {
    for (var i = 0; i < totalPartsDivider; i++) {
      upperParts.push(part1.charAt(Math.floor(Math.random() *
        part1.length)));
    }
  }
  */


  let randomPart1 = Math.random() * criteria[0];
  let randomPart2 = Math.floor(Math.random() * criteria[0]) + 1;
  console.log("Rand1: " + randomPart1);
  console.log("Rand2: " + randomPart2);
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