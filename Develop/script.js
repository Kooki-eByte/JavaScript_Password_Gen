let generateBtn = document.querySelector("#generate");

const randomFunc = {
  lower: getRanLower,
  upper: getRanUpper,
  num: getRanNum,
  speChar: getRanSpec,
};

// * Write password to the #password input
function getRanLower() {
  // * 97 is the decimal code for lower case a; 26 for 26 letters in the alphabet
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRanUpper() {
  // * 65 is the decimal code for upper case A; 26 for 26 letters in the alphabet
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRanNum() {
  // * 48 is the decimal code for number 0; 10 for 0-9 numbers
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRanSpec() {
  // * 33 is the decimal code for special character which starts with !; 15 for 15 special characters
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

function generatePassword(len, lower, upper, num, speChar) {
  // * String to hold our password (resets the password also so it doesnt add on to the old password generated)
  let pw = "";

  // * true = 1 , false = 0
  const typeCounter = lower + upper + num + speChar;

  // * Filter out true or false types
  const typeArr = [{ lower }, { upper }, { num }, { speChar }].filter(
    (item) => Object.values(item)[0]
  );

  // ! This is incase all types are set to fasle, We can return a string because we need at least one type to be chosen.
  if (typeCounter === 0) {
    return "No characters added";
  }

  // * FOR loop over the len , call gen function for each type
  for (let i = 0; i < len; i += typeCounter) {
    // * for each property in the obj do this function..
    typeArr.forEach((type) => {
      let funcName = Object.keys(type)[0];
      // * Adding a new character to the
      pw += randomFunc[funcName]();
    });
  }
  // * add final pw to pw var and return it, slice Method allows us to only grab the right length of password in case more is made.
  const finalPw = pw.slice(0, len);

  return finalPw;
}

// * Next step that will help set up our password and output it
function writePassword() {
  // * store necessary data for generatePassword function to use
  let len = 0;
  let isLowerCase;
  let isUpperCase;
  let isNumeric;
  let isSpecialCha;

  // * Length only 8 - 128 will do until the right number is put in
  do {
    len = prompt(
      "How many characters would you like to have in your password? (Between 8 - 128 characters)"
    );
    len = parseInt(len);
  } while (len < 8 || len > 128 || isNaN(len));

  // * Ask for lowercase, uppercase, numeric, and special characters

  alert("Please select AT LEAST one character type");

  isLowerCase = confirm("do you want lowercase in your password?");

  isUpperCase = confirm("do you want uppercase in your password?");

  isNumeric = confirm("do you want numbers in your password?");

  isSpecialCha = confirm("do you want special characters in your password?");

  let password = generatePassword(
    len,
    isLowerCase,
    isUpperCase,
    isNumeric,
    isSpecialCha
  );
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// * Start to Generate password
generateBtn.addEventListener("click", writePassword);
