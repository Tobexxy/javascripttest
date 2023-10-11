
alert('Hello Tobi'); // shows a pop up message at the top of the screen

typeof("Tobi");// tells the type of data type is being inputed



    var a = "3";
    var b = "8";

        var c = a;
        a = b ;
        b = c;


    console.log("a is " + a);
    console.log("b is " + b);


    // simple logc test

var myName = "Tobi";
var yourName = prompt("What is your name ?");
var nickName = prompt("What do you want to be called ?");
alert("Hello, my name is " + myName + ", nice to meet you " + yourName + "A.k.A " + nickName + " !");
console.log(myName + " the value of a is " + a + " and the value of b is " + b);

// for pop up message logic in chrome





alert("hello world");
typeof("Tobi");
var yourName = prompt("input your character here");
var myName = "Tobi";
var myLen = yourName.length;

 alert("my name is " + myName + ", you have written " + myLen + " characters so far." + " You have " + (140 - myLen) + " characters to go !");


var yourName = prompt("input your character here");
var myName = "Tobi";
var characterlenth = yourName.length
var myLen = yourName.slice(0,140);
alert("my name is " + myName + ", you have written " + characterlenth + " characters so far." + " You have " + (140 - characterlenth) + " characters to go! . Below is what you typed so far" + " ::" + myLen + "::");

// alert(prompt("input your text here").slice(0,140)); for character shortening to certain variable

var name = prompt("what is your name ?");
var fir = name.toLocaleLowerCase();
var sec = name.toUpperCase();
alert("Hello, " + sec.slice(0,1) + fir.slice(1,name.length));       

// for printing out hello, and adding the first nname an automatic capital letter and the rest small

var dogName = prompt("what is your dog name?");
var dogAge = prompt("how old is " + dogName + " in doggy Years?");
var humanAge = (dogAge - 2) * 4 + 21;
alert(dogName + " is " + humanAge + " in human years" ) ;
//for converting doggy years to human years

function getMilk(money) { 
    console.log("leaveHouse");
    console.log("moveRight");

    var numberMilk = Math.floor(money / 1.5); 
    console.log("buy " + numberMilk +" bottles of milk");  

    
    return money % 1.5; // this code is to print out whats left as per the change value left from the purchase, the remainder


}

var change = getMilk(13);  
console.log("You have " + change + " change left")




//using function to instruct a robot to buy milk, it was give an amount of money and to determine how many bottels it can buy 


function lifeInweeks(age){
    var yourAge = 90 - age;
    var days = 365 * yourAge;
    var weeks = 52 * yourAge;
    var months = 12 * yourAge;
    console.log("You have "+ days + " days, " + weeks + " weeks, " + months + " months, left");
    
}

lifeInweeks(12);

//life calculations code, if life expectancy doesnt exceed 90 years,shows value in days, weeks and months



function bmiCalculator(kg, m2){
    var bmi = Math.round(kg /(m2 * m2));
   return bmi;
}


bmiCalculator(65, 1.8);

// bmi calculator code


var n = Math.random();
var rand = Math.floor(n * 6) + 1;
console.log(rand);
 /// Random number generator from 1-6


var yourName = prompt("Enter your name below");
var loveName = prompt("Enter your lover's name below");
alert("Calculating match between lovers");
var n = Math.random();
var rand = Math.floor(n * 100) + 1;

if (rand > 70){
    alert("The compactablility between " + yourName + " and " + loveName + " is " + rand + "%." + " You are bound to live a life of happiness because you are very compactable");
} else{
    alert("The compactablility between " + yourName + " and " + loveName + " is " + rand + "%," + " Nah only God fit help una relationship,  make una just dey play dey go");
}

//console.log("The compactablility between " + yourName + " and " + loveName + " is " + rand + "%");

 /// Random lovers compactablility generator from 1-100


 var yourName = prompt("Enter your name below");
var loveName = prompt("Enter your lover's name below");
alert("Calculating match between lovers");
var n = Math.random();
var rand = Math.floor(n * 100) + 1;

if (rand >= 70){
    alert("The compactablility between " + yourName + " and " + loveName + " is " + rand + "%." + " You are bound to live a life of happiness because you are very compactable");
} 

if (rand >= 50 && rand < 70){
    alert("The compactablility between " + yourName + " and " + loveName + " is " + rand + "%." + " You have escape, Nah God save you");
} 

if (rand < 50){
    alert("The compactablility between " + yourName + " and " + loveName + " is " + rand + "%," + " Nah only God fit help una relationship,  make una just dey play dey go");
}

//console.log("The compactablility between " + yourName + " and " + loveName + " is " + rand + "%");

 ///  New Random lovers compactablility generator from 1-100 withe added message to the percentage

