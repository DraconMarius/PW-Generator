//PW DATA SPACE, list of all possible character?
var alphabet = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};
var symbol = " !@$#%^+&*()[]{}~/\\";
var pwDNA = [];
var pwAry = [];
var aux = 0;



// if ((pwValid = true) && (pwLaw.pwNum == true) && (pwLaw.upperCase == false) &&
//   (pwLaw.lowerCase == false) && (pwLaw.specialChar == false)) {
//   // for (i = 0; i < pwLaw.pwLength; i++) {
//   //   var random = Math.floor(Math.random() * 10)
// math random gives zero, math.floor rounds down = smaller than 1, multipl by length of list 
//mean it will always be smaller than the list size .... I would have never figured this one out
//myself without help...

//
//I want to run through a list of function to generate random charcters based on a 
//preidentified case

/*example 1: 9 characters, Num = "Y", UpC = "Y", LowC = "N", Special = "N"
if Num = "Y", use genN; else skip to next;
if UpC = "Y", use genU; else skip to next;
if LowC = "Y", use genL; else skip to next;
if Special = "Y", use genS; else repeat until there are exactly 9 characters.
*/




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// To store prompt answers for criteria
function generatePassword() {
  passwordText = "processing"
  var pwLaw = {
    pwLength: prompt("How many characters are you looking for?"),
    pwNum: confirm("Do you want numbers in your pw?"),
    upperCase: confirm("Do you want Upper Case Letters in your pw?"),
    lowerCase: confirm("What about them Lower Case Letters?"),
    specialChar: confirm("Last but not least, special character, yes/no?"),
  };
  // function to generate random characters
  function genN() {
    var randomN = (Math.floor(Math.random() * 10));
    aux = randomN;
  };
  function genU() {
    var randomU = Math.floor(Math.random() * alphabet.uppercase.length);
    randomU = alphabet.uppercase[randomU];
    aux = randomU;
  };
  function genL() {
    var randomL = Math.floor(Math.random() * alphabet.lowercase.length);
    randomL = alphabet.lowercase[randomL];
    aux = randomL;
  };
  function genS() {
    var randomS = Math.floor(Math.random() * symbol.length);
    randomS = symbol[randomS];
    aux = randomS;
  };
  var pwValid = false;

  // Error messages and validation if `no` to any type of char

  if (isNaN(pwLaw.pwLength)) {
    pwValid = false;
    alert("plz try a number");
    pwAry = ["ATTN!! PW length needs to be a number"];
    return pwAry;
  }

  if ((pwLaw.pwLength < 8) || (pwLaw.pwLength > 125)) {
    pwValid = false;
    alert("invalid. plz try again with at least 8 characters or less than 126")
    console.log(pwLaw.pwLength);
    pwAry = ["ATTN!! : 8 < PW > 125chr"];
    return pwAry;
  }

  else if ((pwLaw.pwNum == false) && (pwLaw.upperCase == false) &&
    (pwLaw.lowerCase == false) && (pwLaw.specialChar == false)) {
    pwValid = false;
    alert(`lol enjoy your 'password' with ${pwLaw.pwLength} empty spaces`)
    console.log("invalid " + pwValid);
    pwAry = ["(empty spaces, please try again and choose)"];
    return pwAry;
  }
  else {
    pwValid = true;
  };

  //original idea:
  // like DNA - get a basic formular of what type of character makes the password 
  //so need to generate an array with pwLength, with:
  //"0" = num
  //"1" = upperCase
  //"2" = lowerCase
  //"3" = sepcialChar

  //new idea:
  //get a list of value par like I did, but just want to run it once to determine if 
  //certain criteria is turned "On"
  //modifying "aux" as a global variable t??? store the rule that we want in array
  genDNA();
  function genDNA() {
    pwDNA = [];
    if (pwValid) {
      for (var i = 0; i < 1; i++) {
        aux = 0;
        if (pwLaw.pwNum) {
          // pwDNA.push(aux) = pwLaw[0];
          pwDNA[aux] = 0;
          // console.log("genN");
          aux++;
          // i++;
        };
        if (pwLaw.upperCase) {
          pwDNA[aux] = 1;
          // console.log("genU");
          aux++;
          // i++;
        };
        if (pwLaw.lowerCase) {
          pwDNA[aux] = 2;
          // console.log("genL");
          aux++;
          // i++;
        };
        if (pwLaw.specialChar) {
          pwDNA[aux] = 3;
          // console.log("genS");
          aux++;
          // i++;
        };
        // if (pwDNA.length = (pwLaw.pwLength + 1)) {
        // };
        console.log(pwDNA);
      };
    };
    // };
    // Test();
    // console.log(pwLaw.0);

    // identify and call function:
    // for the password length, use the rules that we have for pwDNA
    // 
    Test();
    function Test() {
      pwAry = [];
      if (pwValid) {
        for (var i = 0; i < pwLaw.pwLength; i++) {
          aux = 0;
          var rand = pwDNA[Math.floor(Math.random() * pwDNA.length)];
          // console.log(rand);
          //   genN() = pwAry[i];
          //   console.log(pwAry[i]);
          switch (rand) {
            case 0:
              genN();
              pwAry[i] = aux;
              break;
            case 1:
              genU();
              pwAry[i] = aux;
              break;
            case 2:
              genL();
              pwAry[i] = aux;
              break;
            case 3:
              genS();
              pwAry[i] = aux;
              break;
          };

          // console.log(pwLaw.pwLength);
        };
      };
      // console.log(aux);
    };

  };
  console.log(pwLaw.pwLength);
  console.log(isNaN(pwLaw.pwLength));
  console.log(pwAry);
  pwAry = pwAry.join("");
  console.log(pwAry);
  return pwAry;

};


  //testing OMG it works
  // genN();
  // genU();
  // genL();
  // genS();
    // function genN() {
    //   var randomN = Math.floor(Math.random() * 10);
    //   aux = randomN
    //   console.log(aux);
    //   console.log("testN: " + aux);
    // }

    // function genU() {
    //   var randomU = Math.floor(Math.random() * alphabet.uppercase.length);
    //   aux = randomU
    //   console.log(aux);
    //   console.log("testU: " + alphabet.uppercase[aux]);
    // }

    // function genL() {
    //   var randomL = Math.floor(Math.random() * alphabet.lowercase.length);
    //   aux = randomL
    //   console.log(aux);
    //   console.log("testL: " + alphabet.lowercase[aux]);
    // }

    // function genS() {
    //   var randomS = Math.floor(Math.random() * symbol.length);
    //   aux = randomS
    //   console.log(aux);
    //   console.log("testS: " + symbol[aux]);