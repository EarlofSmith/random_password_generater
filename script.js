// Assignment Code

const passwordTxt = document.getElementById("password")
const lower =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var pickNum;
var pickSym;
var pickLower;
var pickUpper;
var choice;
var passwordLength;
var toUpper = function (x) {
    return x.toUpperCase();
};
// funtion for upercase conversion
upper = lower.map(toUpper);
// lower case converted to upper and stored in varible
var gen = document.querySelector("#generate");
gen.addEventListener("click", function() { 
    pass = generatePassword();
    document.getElementById("password").placeholder = pass;
   document.getElementById("password").style.color = "white";
   document.getElementById("password").style.backgroundColor = "black";
});
// this is where everything exicutes when the button is clicked
function generatePassword() {
    passwordLength = (window.prompt("How many characters long would your like it to be? min 8 max 128"));
    // asks user for number of characters for the password length
    if (!passwordLength) {
        window.alert("This needs a value");
    } 
    else if (passwordLength < 8 || passwordLength > 128 ) {
        passwordLength = parseInt(window.alert("Choose a number between 8 and 128"));
    } 
       // checks to make sure choice is valid and prompts if not
    else {
        pickNum = confirm("Would you like your password to include numbers?");
        pickLower = confirm("Would you like your password to include lowercase letters?");
        pickSym = confirm("Would you like your password to include special characters?");
        pickUpper = confirm("Would you like your password to include uppercase letters?")
    }; 
    // asks rest of promps for selections

    if (!pickNum && !pickLower && !pickSym && !pickUpper) {
        choice = window.alert("Please choose at least one criteria for your password.")
    } 
    // alert if nothing is chosen
    else if (pickNum && pickLower && pickSym && pickUpper) {
        choice = numbers.concat(upper, lower, symbols);
    }
    // slection if all prompts are chosen
    else if (pickNum && pickLower && pickSym) {
        choice = numbers.concat(pickLower,pickSym);
    }
    else if (pickNum && pickLower && pickUpper) {
        choice = numbers.concat(lower,upper);
    }
    else if (pickNum && pickUpper && pickSym) {
        choice = numbers.concat(upper,symbols);
    }
    else if (pickUpper && pickLower && pickSym) {
        choice = pickUpper.concat(lower,symbols);
    }
    //  selection if 3 prompts are chosen
    else if (pickNum && pickLower) {
        choice = numbers.concat(lower);
    }
    else if (pickNum && pickSym) {
        choice = numbers.concat(symbols);
    }
    else if (pickNum && pickUpper) {
        choice = numbers.concat(upper);
    }
    else if (pickLower && pickSym) {
        choice = numbers.concat(symbols);
    }
    else if (pickLower && pickUpper) {
        choice = lower.concat(upper);
    }
    else if (pickUpper && pickSym) {
        choice = upper.concat(symbols);
    }
    // selection if 2 prompts are chosen
    else if (pickNum) {
        choice = numbers;
    }
    else if (pickSym) {
        choice = symbols;
    }
    else if (pickUpper) {
        choice = upper;
    }
    else if (pickLower) {
        choice = lower;
    };
    // selection if 1 prompt is chosen

var password = [];
// array placeholder
for (var i = 0; i < passwordLength; i++) {
    var peramiters = choice[Math.floor(Math.random() * choice.length)];
    password.push(peramiters);
}
// loop that runs the randomizer function with peramiters from prompt
var passwordString = password.join("");
// https://sebhastian.com/javascript-array-string/ how to turn an aray into a string
UserPassword(passwordString);
return passwordString;
}

function UserPassword(passwordString) {
    document.getElementById("password").textContent = passwordString;
}
// logs the text from the password into the password line

var copy = document.querySelector("#copy");
copy.addEventListener("click", function() {
    CopyPassword();
});

function CopyPassword() {
document.getElementById("password").select();
document.execCommand("copy");
window.alert("Password Copied");
}
// liked this copy feature and modified it from a w3 page on password generaters.https://w3collective.com/random-password-generator-javascript/