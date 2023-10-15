// var myName = "Tobi";
// var yourName = prompt("What is your name ?");
// var nickName = prompt("What do you want to be called ?");
// alert("Hello, my name is " + myName + ", nice to meet you " + yourName + " A.k.A " + nickName + " !");

//Changing text in html file(first locate the element using htmltree and use the inner to change the value)
document.querySelector("h1").innerHTML = "Welcome to my JavaScript Testing website.";

//using tree get first or last element tags
var h1 = document.firstElementChild.lastElementChild.firstElementChild;
h1.innerHTML = "JavaScript Website";

//aside from changing the content you can also change the style
h1.style.color = "blue";


document.querySelector("input").click()

var list = document.firstElementChild.lastElementChild.firstElementChild.nextElementSibling;
list.innerHTML = "Java Testing";



//how to get an element with multiple items and same name e.g h1 or l1 appearing multiple times .getting elements by their tag name
document.getElementsByTagName("li")[2].innerHTML = "Mozilla Fire Fox";


document.querySelectorAll("li")[0]; //use query selector to get a specific tag when a tag appears in multiple occassions

//changing an item in the list color
document.querySelector("ul li a").style.color = "red";

//changing color of button
document.querySelector("button").style.backgroundColor = "red";

document.querySelector("button").style.color = "white";

//creating a class list in Javascript and adding it to through css
document.querySelector("h2").classList.add("test");
