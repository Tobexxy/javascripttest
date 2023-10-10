
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