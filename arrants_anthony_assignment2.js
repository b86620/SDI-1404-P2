// alert("JavaScript works!");
// Anthony Arrants
// SDI 1404 
// Project 2
// Is this FUNCTIONal? Fun with functions in JavaScript.

// Prompt and procedure

var moneyNeeded = prompt("How much money do we need?" , "Enter a value less than 1000.");


if(parseInt(moneyNeeded) < 20000) {
    console.log("There will be plenty of money in the ATM.");    
} else {
    console.log("We need to figure out a different place to hit.")
}


// confirmation going into a Boolean function. 

var booleanFunction = function(readyToGo, notReady) {
    while (notReady) {
        readyToGo = confirm("Are you ready to go?");
        if (readyToGo){
            console.log("Let's go.");    
            notReady = false;
        }
        else console.log("Still not ready.") 
    }
};

booleanFunction(false, true);



// Number function

var ATM = function(number) {
  var i;
  for(i = number; i >= 25; i-=25) {
    console.log("Removing money, "+i+" "+ "dollars" + " left");
    }
    return i;
};

ATM(moneyNeeded); 


// strings go here.
var concat = function(string1, string2) {
    var returnString = string1 + " " + string2;
    return returnString; 
};

console.log(concat("We are going to get in trouble" , "or so I think."));






