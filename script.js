// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Arrays needed and characters
var lettersLow =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUp = ["A","B", "C", "D", "E", "F", "G", "H",  "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"];

//Generate password
function generatePassword(){
    var passwordLength = +(prompt("How long would you like your password to be, 8-128 characters? :D"));
if(passwordLength < 8 || passwordLength > 128) {
    alert("Value must be between 8-128 characters");
    return;
}

var passwordCharc = []

var lower = confirm("Would you like Lowercase letters?");
if(lower === true) {
    passwordCharc = passwordCharc.concat(lettersLow)
}

var upper = confirm("Would you like Uppercase letters?");
if(upper === true) {
    passwordCharc = passwordCharc.concat(lettersUp)
}

var numbers = confirm("Would you like to use numbers?");
if(numbers === true) {
    passwordCharc = passwordCharc.concat(numbers)
}

var special = confirm("Would you like special characters?");
if(special === true) {
    passwordCharc = passwordCharc.concat(specialChar)
}


let finalPassword = "";

for(i=0;i<passwordLength;i++){
    finalPassword+=passwordCharc[Math.floor(Math.random()*passwordCharc.length)]
}

return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);