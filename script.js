// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordRequirements = {
  length : 0,
  lowercase : false,
  uppercase : false,
  special : false,
  passwordProto : [],
};

function passwordStats() {
  console.log("event listener 2 activate");
  passwordRequirements.length = parseInt(document.getElementById("inputlength").value);
  passwordRequirements.lowercase = document.getElementById("inputlc").checked;
  passwordRequirements.uppercase = document.getElementById("inputup").checked;
  passwordRequirements.special = document.getElementById("inputsp").checked;

  var showForm = document.querySelector("#passwordform");
  showForm.setAttribute("style", "display: none;");

  writePassword();
}

function userInfo() {
  console.log("event listener activate");
  var showForm = document.querySelector("#passwordform");
  showForm.setAttribute("style", "display: block;");
  
  var submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", passwordStats);
}

function generatePassword() {
  console.log("generate password function triggered");
  var lowercaseChoices = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChoices = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChoices = "!@#$%^&*()?";

  var Choices = "";
  console.log(Choices);

  if(passwordRequirements.lowercase == true) {
    Choices += lowercaseChoices;
    console.log("lowercase");
  }
  if(passwordRequirements.uppercase == true) {
    Choices += uppercaseChoices;
  }
  if(passwordRequirements.special == true) {
    Choices += specialChoices;
  }

  console.log(Choices);
  var choiceArray = Choices.split("");
  console.log(choiceArray);

  Choices = "";

  for(let i = 0; i < passwordRequirements.length; i++) {
    passwordRequirements.passwordProto.push(choiceArray[Math.floor(Math.random() * choiceArray.length)]);
    Choices += passwordRequirements.passwordProto[i];
  }

  console.log(Choices);
  return Choices;
};

// Write password to the #password input
function writePassword() {
  console.log("write password function triggered");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", userInfo);