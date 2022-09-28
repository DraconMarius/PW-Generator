//PW DATA SPACE, list of all possible character?
var Alphabet = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upwercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
};
var symble = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;









}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// To store prompt answers for criteria
function generatePassword() {
  var pwLaw = {
    pwLength: prompt("How many characters are you looking for?"),
    pwNum: confirm("Do you want numbers in your pw?"),
    upperCase: confirm("Do you want Upper Case Letters in your pw?"),
    lowerCase: confirm("What about them Lower Case Letters?"),
    specialChar: confirm("Last but not least, special character, yes/no?"),
  };
  var pwValid = false;
  console.log(pwLaw.pwLength);

  // Error messages 
  if (pwLaw.pwLength < 8) {
    alert("invalid. plz try again with at least 8 characters")
    console.log(pwLaw.pwLength);
    console.log(pwLaw);
  }

  if ((pwLaw.pwNum == false) && (upperCase == false) && (pwLaw.UpperCase == false) && (pwLaw.specialChar == false)) {
    pwValid = false;
    alert(`lol enjoy your 'password' with ${pwLaw.pwLength} empty spaces`)
    console.log("invalid" + pwValid);
  }
  else {
    pwValid = true;
  };

  // else if (pwLaw.value == [NaN, false, false, false, false]) {
  //   pwValid = false
  //   alert(`Here is your 'password' with ${pwLength} spaces`)
  // }
  // else {
  //   pwValid = true
  // }
}



