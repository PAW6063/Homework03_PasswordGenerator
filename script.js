// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordRequirements = {
  length : 0,
  lowercase : false,
  uppercase : false,
  special : false,
  passwordProto : "",
};

function passwordStats() {
  /*while(((passwordRequirements.length < 8) || (passwordRequirements.length > 128)) && ((passwordRequirements.lowercase == false) && (passwordRequirements.uppercase == false) && (passwordRequirements.special == false))) {
    passwordRequirements.length = parseInt(document.getElementById("inputlength").value);
    passwordRequirements.lowercase = document.getElementById("inputlc").checked;
    passwordRequirements.uppercase = document.getElementById("inputup").checked;
    passwordRequirements.special = document.getElementById("inputsp").checked;

    if((passwordRequirements.length < 8) || (passwordRequirements.length > 128)){
      passwordRequirements.length = window.prompt("Length must be between 8-128!!");
    }
    if((passwordRequirements.lowercase == false) && (passwordRequirements.uppercase == false) && (passwordRequirements.special == false)){
      window.alert("Must check atleast one!!!");
    }
  }*/
  passwordRequirements.length = parseInt(document.getElementById("inputlength").value);
  lowercase = document.getElementById("inputlc").checked;
  uppercase = document.getElementById("inputup").checked;
  special = document.getElementById("inputsp").checked;

  var showForm = document.querySelector("#passwordform");
  showForm.setAttribute("style", "display: none;");
}

function userInfo() {
  var showForm = document.querySelector("#passwordform");
  showForm.setAttribute("style", "display: block;");
  
  var submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", passwordStats);
  
  writePassword();
}

function generatePassword() {
  var lowercaseChoices = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercaseChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var specialChoices = "!@#$%^&*()?".split("");

  var Choices = "";

  if(passwordRequirements.lowercase == true) {
    Choices += lowercaseChoices;
  }
  if(passwordRequirements.uppercase == true) {
    Choices += uppercaseChoices;
  }
  if(passwordRequirements.special == true) {
    Choices += specialChoices;
  }

  for(let i = 0; i < passwordRequirements.length; i++) {
    passwordRequirements.passwordProto += Math.floor(Math.random() * Choices.length);
  }

  return passwordRequirements.passwordProto;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", userInfo);