// ! WHEN I click the button to generate a password
// ! THEN I am presented with a series of prompts for password criteria
// * event
// ! WHEN prompted for password criteria
// ! THEN I select which criteria to include in the password
// ! WHEN prompted for the length of the password
// ! THEN I choose a length of at least 8 characters and no more than 128 characters
// ! WHEN prompted for character types to include in the password
// ! THEN I choose lowercase, uppercase, numeric, and/or special characters
// ! WHEN I answer each prompt
// ! THEN my input should be validated and at least one character type should be selected
// ! WHEN all prompts are answered
// ! THEN a password is generated that matches the selected criteria
// ! WHEN the password is generated
// ! THEN the password is either displayed in an confirm or written to the page

// ! Assignment Code
var generateBtn = document.querySelector("#generate");

const randomFunc = {
  lower: getRanLower,
  upper: getRanUpper,
  num: getRanNum,
  speChar: getRanSpec,
};

// ? Write password to the #password input

function getRanLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRanUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRanNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRanSpec() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

function generatePassword(len, lower, upper, num, speChar) {
  // String to hold our password
  let pw = "";
  // Filter out true or false types
  const typeArr = [{ lower }, { upper }, { num }, { speChar }].filter(
    (item) => Object.values(item)[0]
  );
  // FOR loop over the len , call gen function for each type
  for (let i = 0; i < len; i++) {
    typeArr.forEach((type) => {
      const funcName = Object.keys(type[0]);

      pw += randomFunc[funcName]();
    });
  }
  // add final pw to pw var and return it
  return pw;
}

// Next step that will help set up our password and output it
function writePassword() {
  // ! Length 8 - 128
  let len;
  do {
    len = prompt(
      "How many characters would you like to have in your password? (Between 8 - 128 characters)"
    );
    len = parseInt(len);
  } while (len < 8 || len > 128);

  if (len >= 8 || len <= 128) {
    console.log("This is the len: " + len);

    // ! Ask for lowercase, uppercase, numeric, and special characters

    alert("Please select AT LEAST one character type");

    let isLowerCase = confirm("do you want lowercase in your password?");
    console.log(isLowerCase);

    let isUpperCase = confirm("do you want uppercase in your password?");
    console.log(isUpperCase);

    let isNumeric = confirm("do you want numbers in your password?");
    console.log(isNumeric);

    let isSpecialCha = confirm(
      "do you want special characters in your password?"
    );
    console.log(isSpecialCha);
  } else {
    alert("Invalid input");
  }

  var password = generatePassword(
    len,
    isLowerCase,
    isUpperCase,
    isNumeric,
    isSpecialCha
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Start to Generate password
generateBtn.addEventListener("click", writePassword);
