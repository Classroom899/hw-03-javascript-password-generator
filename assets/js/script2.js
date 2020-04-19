var generateBtn = document.querySelector("#Generator");

var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var numeric = document.getElementById("numeric");
var specialCharacters = document.getElementById("special-characters");
var passwordEl = document.getElementById("Password-Length");

// Set the characters below 

var lowercaseOptions = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "123456789";
var specialCharacters = "!@#$%^&*()";

function writePassword() {
    var passwordLength = parseInt(passwordEl.value);
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password needs to be between 8 and 128 characters in length");
    } else {
        var password = generatePassword(passwordLength);
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
}
generateBtn.addEventListener("click", writePassword);
// var charSet = {
//     lowercaseLength = "lowercase.length",
//     uppercaseLength = "uppercase.length",
//     numericLength = "numeric.length",
//     specialCharactersLength = "specialCharacters.length",
// };


//Function called generatePassword

function generatePassword(length) {
    var generatedPassword = "";
    // Get criteria from page
    var criteria = {
        lowercase: lowercase.checked                 ////////Kept getting unexpected ts(1005) error
        // uppercase: uppercase.checked
        
    }
    console.log(criteria);
    // Generate a list of allowed characters based on criteria
    var allowedOptions = [];
    if(criteria.lowercase) {
        allowedOptions = allowedOptions + lowercaseOptions;
    }
    allowedOptions = allowedOptions.split("")
    
    // Write a for loop from 0 to less than length
    for (var i = 0; i < length; i++) {
        var character = allowedOptions[Math.floor(Math.random() * (allowedOptions.length - 1))]
        generatedPassword = generatedPassword + character
    };
        // Pick a random character from allowed options
        // Concatentate that in to generaatedPassword
    // Return final password
    return generatedPassword;
}

//Then inside generatePassword it needs to check what checkboxes are checked - so using if statements and into the string

    // Reference for loop, set a variable to use instead of numbers in my math.randoms
    // for (var 1 = 0; i < )


function generatePassword(length) {
    var generatedPassword = "";

    var criteria = {
        uppercase: uppercase.checked
        
    }
    console.log(criteria);
    var allowedOptions = [];
    if(criteria.uppercase) {
        allowedOptions = allowedOptions + uppercaseOptions;
    }

    allowedOptions = allowedOptions.split("")
    //Write another for loop from 
    for (var i = 0; i < length; i++) {
        var character = allowedOptions[Math.floor(Math.random() * (allowedOptions.length - 1))]
        generatedPassword = generatedPassword + character
    };

    return generatedPassword;

}


    