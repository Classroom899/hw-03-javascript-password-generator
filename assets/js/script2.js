var generateBtn = document.querySelector("#Generator");

var lowercase = (document.getElementById("lowercase").checked);
var uppercase = (document.getElementById("uppercase").checked);
var numeric = (document.getElementById("numeric").checked);
var specialCharacters = (document.getElementById("special-characters").checked);
var passwordLength = document.getElementById("Password-Length").value;

// Set the characters below 

//Function called generatePassword

//Then inside generatePassword it needs to check what checkboxes are checked - so using if statements and into the string


// Reference for loop, set a variable to use instead of numbers in my math.randoms



function writePassword() {
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password needs to be between 8 and 128 characters in length");
    } else {
        var password = generatePassword(); 
        var passwordText = document.querySelector("password");
        passwordText.value = passwords;
    }
}
generateBtn.addEventListener("click", writePassword);