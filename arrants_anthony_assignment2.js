// alert("JavaScript works!");
// Anthony Arrants
// SDI 1404 
// Project 2
// Is this FUNCTIONal? Fun with functions in JavaScript.

// Global variables

var crook1 = "Butch";
var readyToGo = true;


console.log("I think it's time to rob a bank. I am bored and want to have fun, but I am broke.");
console.log("I am going to get my friend" + crook1 + " to help me knock off two ATMs outside this bank down the road.");
console.log("First, lets find out how much money we need in order to have a fair amount of fun.");
console.log("We are worried that the ATMs may not have enough cash in them to supply our need.");
console.log("I think there should be more than $20,000 in the ATM. Is there a way to check?");
console.log("Butch hacked into the bank to check the status of the ATM.");
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

console.log("I have never been so nervous to do something in my life, I told Butch.");
console.log("Butch said: If we get arrested, you better not rat me out.");
console.log("I won't I said.");
console.log("We approach the bank, take a deep breath, and start walking to our respective ATMs.");
console.log("At nearly the exact same time, Butch and I pull our computers out and start pecking away as we try to interface with the ATMs.");
console.log("We both look at eachother--we have hit the jackpot. Now we have to wait for the money to shoot out.");
console.log("I hear the inner workings of the ATM moving as money starts to spit out.");
// Number function

var ATM = function(number) {
  var i;
  for(i = number; i >= 25; i-=25) {
    console.log("Removing money, "+i+" "+ "dollars" + " left");
    }
    return i;
};

ATM(moneyNeeded); 

console.log("Holy, I just saw the police drive by on the road above us! Let's go!");
console.log("We get to the car and start driving to a hideout.");

// strings go here.
var concat = function(string1, string2) {
    var returnString = string1 + " " + string2;
    return returnString; 
};

console.log(concat("We are going to get in trouble" , "or so I think."));
console.log("\"Maybe we won't\", I tell Butch. For now, lets just try to have some fun until we get caught.");
console.log("Let's pop some some bottles.");
console.log("The end.");





