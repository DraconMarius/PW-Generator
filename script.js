//PW DATA SPACE, list of all possible character?
var Alphabet = {
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upwercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
};
var symble = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "~"]
console.log(symble);
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
  var pwLength = prompt("How many characters are you looking for?");
  var pwNum = confirm("Do you want numbers in your pw?");
  var upperCase = confirm("Do you want Upper Case Letters in your pw?");
  var lowerCase = confirm("What about them Lower Case Letters?");
  var specialChar = confirm("Last but not least, special character, yes/no?");
};




