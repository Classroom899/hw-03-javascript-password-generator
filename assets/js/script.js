// Generator functions - Reference Char - http://www.net-comber.com/charset.html // reference this!

console.log("hello from script.js");

// prompt()

// prompt() 

//DOM elements

document.getElementById("Password-Length");
    
document.getElementById("Generator").addEventListener("click", function (event){
    var checkboxes = {
        lowercase:(document.getElementById("lowercase").checked),
        uppercase:(document.getElementById("uppercase").checked),
        numeric:(document.getElementById("numeric").checked),
        specialCharacters:(document.getElementById("special-characters").checked),
        passwordLength:parseInt(document.getElementById("Password-Length").value),
    }

    var anyFunction = {
        lowercase: getRandomLower,
        uppercase: getRandomUpper,
        numeric: getRandomNumber,
        specialCharacters: getRandomSymbol,

    }
    // console.log(checkboxes)
    // console.log(checkboxes.numeric)

    if (checkboxes.passwordLength < 8 || checkboxes.passwordLength > 128) {
        alert("Password needs to be between 8 and 128 characters");
    }
    else { "Password is fine"


    
        
        
        
        // This is where the logic will go for generating a password - the functions

    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    console.log(getRandomLower());

    console.log(Math.floor(Math.random() * 26)); //26 letters to choose from


    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }

    console.log(getRandomUpper());

    
    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    console.log(getRandomNumber());


    function getRandomSymbol() {
        var symbols = "!@#$%^&*(){}[]=<>/,.";
        return symbols [Math.floor(Math.random() * symbols.length)];
    }
    console.log(getRandomSymbol());




        // Will need a repository of uppercase characters in arrays,

        var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    

        // set that array and then generate a random number that will now take that index into the array


    }
})


