//PW DATA SPACE, list of all possible character?
var alphabet = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

var symbol = " !@$#%^&*()[]{}~/\\\"";

//PW generation fn

// if ((pwValid = true) && (pwLaw.pwNum == true) && (pwLaw.upperCase == false) &&
//   (pwLaw.lowerCase == false) && (pwLaw.specialChar == false)) {
//   // for (i = 0; i < pwLaw.pwLength; i++) {
//   //   var random = Math.floor(Math.random() * 10)
// math random gives zero, math.floor rounds down = smaller than 1, multipl by length of list 
//mean it will always be smaller than the list size .... I would have never figured this one out
//myself without help...

function genN() {
  var randomN = Math.floor(Math.random() * 10);
  aux = randomN
  console.log(aux);
  console.log("testN: " + aux);
}

function genU() {
  var randomU = Math.floor(Math.random() * alphabet.uppercase.length);
  aux = randomU
  console.log(aux);
  console.log("testU: " + alphabet.uppercase[aux]);
}

function genL() {
  var randomL = Math.floor(Math.random() * alphabet.lowercase.length);
  aux = randomL
  console.log(aux);
  console.log("testL: " + alphabet.lowercase[aux]);
}

function genS() {
  var randomS = Math.floor(Math.random() * symbol.length);
  aux = randomS
  console.log(aux);
  console.log("testS: " + symbol[aux]);
}
//testing OMG it works
// genN();
// genU();
// genL();
// genS();

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", genU);


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

  // Error messages and validation if `no` to any type of char
  if ((pwLaw.pwLength < 8) || (pwLaw.pwLength > 25)) {
    alert("invalid. plz try again with at least 8 characters or less than 25")
    console.log(pwLaw.pwLength);
    console.log(pwLaw);
  }

  if ((pwLaw.pwNum == false) && (pwLaw.upperCase == false) && (pwLaw.lowerCase == false) && (pwLaw.specialChar == false)) {
    pwValid = false;
    alert(`lol enjoy your 'password' with ${pwLaw.pwLength} empty spaces`)
    console.log("invalid " + pwValid);
  }
  else {
    pwValid = true;
  };



  console.log(randomU);
  console.log(aux);
};



