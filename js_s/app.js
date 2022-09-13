
/*
 var age = prompt("whats your age")
document.getElementById("h2-name").innerHTML = age;
*/
var number1 = 6;
number1 = number1 + 2;
console.log(number1);
 /*function
  1. create a function
 2. call the function
*/
//create
function fun() {
    alert("this is a function");
}
// call

fun();

/*
Lets create a function that take in a name and says hello followed by your Name

for example

Name: "Paul"
Return:"Hello paul"
*/

function greeting() {
    var name = prompt("What's your Name?") 
    
    var result = "Hello " + name;
    document.write(result);
}
//greeting();

//NB: Functions can also take in Arguments

//But first How do Arguments work in functions? for example
/*
 function sumNumbers(num1, num2) {
     var result = (num1 + num2);
     console.log(result)
 }
sumNumbers(10, 20);

function anothergreeting(yourname) {
    
    var result = ("<h1>You are " + yourname + " year old");
    
    
    document.write(result);
}
var yourage = prompt("what is your age?")
anothergreeting(yourage);
*/

/*-- For Vs While loops in javascript
--*/
/*
//1st >> While loops
var num = 0;
while (num < 100) {
   num += 1;
console.log(num);   
}
*/
/*
// For loop
for (let num = 0; num < 100; num++) {
    console.log(num);
}

var a = 13;
var b = 14;
var c = 34;
var d = c - b + a;
document.write(d);     

function fan(){
    //Body of a function
    
    document.write("I am a fanatic");
}
fan();
fan();
*/
/*
function addAB (){
    var a = 5;
    var b = 7;
    var result = a + b;
    return result;
}
Multi_C();
function Multi_C(){
    var c = 10;
    var result = addAB() * c;
    document.write(result);
}
*/
// first method
/*
function Multi_pi_r (){
    var r = 10;
    var pi = 3.14;
    var area = pi * r;
    return area;
}
 
function Multi_R(){
    var r = 10;
    var Area_of_Circ = Multi_pi_r() * r;
    document.write(Area_of_Circ);
}
Multi_R();
*/
//2nd method assignment

function Multi_r (){
    var r = 6;
    var result = r * r;
    return result;
}
 
function Multi_pi(){  
    var pi = 3.14;
    var Area_of_Circ = Multi_r() * pi;
    document.write(Area_of_Circ);
}
Multi_pi();
/*
var age = 12;
var age2 = 21;
var age3 = "odd";

if(age == -12){
    document.write("Welcome!!");
}
else{
    document.write("invalid");
}

if (age2 === 21){
    window.alert("Happy 21st Birthday")
};
if (age3 === "odd"){
    document.write("Your age is odd!")
}*/
/*

// Create secretNumber
var secretNumber = 5;

// ask user for Guess
 var guess = prompt("Guess a Number")

 //Check if guess is right
 
if (Number(guess) === secretNumber){
    alert("you are right!!")
}
else if(Number(guess)> secretNumber){
    alert("Too high. guess again!!")
}
else{
    alert("you are Wrong")
}
*/

//how the else if condition works

/*
var score = 44;
if (score >= 70){
   document.write("Thank you my son, you will becokme great in life") ;   
}else if(score >= 60){
     document.write("Nice performance my kiddo, you will surely become an engineer");
}else if(score >=50){
        document.write("Oh, you tried. we will start up a business for you in Onitsha");   
}else if(score >= 45){
        document.write("Hmmm, this your block head, you must have gotten it from your Mother");
}else{
    document.write("I have disown you in Life");
}

// How the switch condition works

var state = "Enugu";
switch(state){
    case "Enugu" :
        document.write("Coal city state");
        break;
        
        case "lagos" :
        document.write("Center of excellence");
        break;
        
        case "Anambra" :
        document.write("Light of the Nation");
        break;
        
        case "Abuja" :
        document.write("Federal capital territory");
        break;
        
    default:
        document.write("you are not a Nigerian");
}
// For loop
var odd = 1;
for(odd; odd <= 30; odd = odd + 2){
    document.write("<br>")
    document.write( odd);
}
// while loop
var k = 2;
while( k < 10){
    document.write(k);
    k = k + 2;
}document.write("<br>")
// while loop with if statement
var l = 1;
while(l < 10){
    if(l === 6){
        document.write("you have reached your limit");
        break;
    }
  //  document.write(l);
    l = l + 1;
}

*/

// if stament for GRADE scores
document.write("<br/>");
document.write("<br/>");
var score1 = parseInt(prompt("enter score: "));
if(score1 > 100 || score1 < 0){
   document.write("<h1> invalid score")
}else if( score1 >= 70     ){
   document.write("<h1> A+") 
}
else if(score1 >= 60){
   document.write("<h1> B") 
}

else if(score1 >= 50){
    document.write("<h1>  C ")
}

else if(score1 <= 49){
    document.write("<h1>  F ")
}

document.write("<br/>");


// for loop for prime numbers between 2 & 30
document.write("<h4> for loop for prime numbers between 2 & 30" +  "First Method")
for(var x = 2; x <= 30; x++){
    var isprime = true;
    
    for( var y = 2; y <= x; y++){
        if(x % y === 0 && x !== y){
            var isprime = false;
        }
    }
    if(isprime === true){
               document.write("<br/>")
        document.write(x);
 
    }
}
document.write("<br/>")
// second method, Prime numbers between 2 and 50
document.write("<h4>second method, Prime numbers between 2 and 50")
for(var t = 2; t <= 50; t++){
    var prime = true;
    
    for( var s = 2; s < t; s++){
        if(t % s == 0){
            prime = false;
            break;
        }
    }
    if(prime === true){
               document.write("<br/>")
        document.write(t);
 
    }
}

// FOR LOOP TO CHECK IF A NUMBER IS A PRIME NUMBER
document.write("<br/>");
document.write("<br/>");
var num = prompt("Enter a number between 2 and 30 to check if its a prime number")  
var odd = 0;
for(var i = 2; i <= num; i++){
    if(num % 2 === 0){
        odd = 1;
        break;
   }
}
if(odd == 0){
   document.write( num + " " + "is a prime number <h1>")
}else{
    document.write( num + " " + "is not a prime number <h1>")
} 

// FOR in
var paul = {name:"Chimere", surname: "Ichoku", gender:"Male", age: 19} 
var d;
for (d in paul){
    document.write("<br/>" + paul [d]); 
}

// DO, WHILE LOOP

var u = 23;
do{
    document.write(u);
    u++
}
while(u  <= 40);

// Array
var properties = new Array("penthouse","Bungalow","terrace", "Duplex");
document.write(properties[2]);
//To Loop inside our array
for(var o = 0; o < properties.length; o++){
    document.write("<br/>" + properties[o]);
}
// For changing an element inside an array
//properties[0] = "factory"
//document.write(properties[0]);

// DOM
var getid = document.getElementById("btn");
console.log(getid);
var getMusic = document.getElementById("music")
console.log(getMusic);

var getTags = document.getElementsByTagName("h4");
console.log(getTags);

var getparent = document.getElementById("btn");

var pare = getparent.parentNode;
console.log(pare);

var get_Root = document.getElementById("root")
var get_Firstchild = get_Root.firstElementChild;
console.log(get_Firstchild);

var get_sandra = document.getElementById("luke")
var get_nextsib = get_sandra.nextElementSibling;
console.log(get_nextsib);

//var attr = document.getElementById("btn");
//var get_type = attr.getAttribute("type")
//console.log(get_type);
//
function set_attribute(){
   var attr = document.getElementById("btn");
    attr.style.backgroundColor="orange";
    attr.style.width="300px";
    var getType = attr.setAttribute("class", "btn_large");
}
// To show an Element
function showstaffform(){
    
    var student = document.getElementById("student");
    var staff = document.getElementById("staff");
    students.style.display="none";
    staff.style.display="block";
    
}
function showstudentform(){
    var student = document.getElementById("student");
    var staff = document.getElementById("staff");
    students.style.display="block";
    staff.style.display="none";
    
}
// To hide an element
function hidestaffform(){
    var staff = document.getElementById("staff");
    staff.style.display="none";
    
}
// To add an element
function createEle(){
    var createElem = document.createElement("h3")
    
    var createTEXT = document.createTextNode("There is champions League on sunday");
    var appen = createElem.appendChild(createTEXT);
    document.body.appendChild(createElem);
}
// To remove an element
function create_remove_MSG(){
    var create_remove = document.getElementById("red");
    document.body.removeChild(create_remove);
}
// To replace a Text / Context
function replace_MSG(){
    var newP = document.createElement("p");
    var OLD_txt = document.createTextNode("HELlO THERE!!");
    newP.appendChild(OLD_txt);
    var old = document.getElementById("H_tag");
    old.parentNode.replaceChild(newP, old);
}
// Inserting an element before an element
function InsertA(){
    var createElem = document.createElement("h4")
    var textnode = document.createTextNode("Inserting h4 before a p tag");
    
    createElem.appendChild(textnode);
    var getParentId = document.getElementById("div");
    var getChildId = document.getElementById("dare");
    getParentId.insertBefore(createElem, getChildId);
    
}

// Form validation
function getUser_name(){
    var username = document.getElementById("User").value;
    console.log(username);
    
}
function getEmail(){
    //var email = document.getElementById("mail").value;
    //if(email.length <= 5){
     //   alert("email cannot be less than six characters")
        
    //}
       var email = document.getElementById("mail").value;
        if(email == ''){
       document.getElementById("p").innerHTML = "Email cannot be empty";
        document.getElementById("submit").disabled = true;
        //location.reload();
    }
};

//  form validation regular expression

/*function checkIfUsernameIsEmpty(usernameId,helperMsg){

      var numRegExp = /^[0-9]+$/;
    
    //var username = document.getElementById("username").value;
    //if(username === ""){
    //    alert("Username cannot be empty");
    //}
     if(usernameId.value.match(numRegExp)){
        alert("valid number format")
    }else if(usernameId == ""){
        alert("sssss")
    }
    
    else{
        alert(helperMsg);
        //usernameId.focus();
        //usernameId.value = "";
    }
}*/

function getuser(){
    var username_id = document.getElementById("username").value;
    if(username_id == ''){
        alert("Username cannot be empty");
        
    }else if(username_id.length <= 5){
         alert("Username characters must be above five");
    }else{
        alert("Valid Username");
    }
};
function less_six(elem, helperMessage){
    if(elem.value.length <= 6){
        alert(helperMessage);
        elem.focus();
    }else{
        alert("Valid")
    }
  
};

function regEXP(ID, MSG){
    var numericExp = /^[0-9]+$/;
    if(ID.value == ""){
       alert("Must not be empty")
       ID.focus(); 
       
    }
   else if(ID.value.match(numericExp)){
        alert("valid");
 
        
    }else{
        alert(MSG)
        ID.focus();
        ID.value = "";
    }
}

function email_Validator(Email, ErrMsg){
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(Email.value.match(emailExp)){
        alert("valid email")
    }else{
        alert(ErrMsg)
        Email.focus();
        Email.value = "";
    }
}
function checkSelection(id, displayMsg){ 
    if(id.value == "select your gender"){
        alert(displayMsg)
        id.focus();
    }
    else{
        alert("valid")
    }
}


$(document).ready(function(){
                arr = $("#comment").val();
      console.log(arr);
                  })

function showforanambra(){
    var firstselect = document.getElementById("cities");
    var secondselect = document.getElementById("cit");
    secondselect.style.display="block";
    firstselect.style.display="none";
    
}
function showforenugu(){
    var firstselect = document.getElementById("cities");
    var secondselect = document.getElementById("cit");
    firstselect.style.display="block";
    secondselect.style.display="none";
    
}
function changeFunc() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if(selectedValue == "enugu"){
     var getid = document.getElementById("cit").style.display="block";
      var getid = document.getElementById("cities").style.display="none ";
  }else if(selectedValue == "anambra"){
       var getid = document.getElementById("cities").style.display="block";
       var getid = document.getElementById("cit").style.display="none";
  }
      
   }

$(document).ready(function(){
    $("#submit").click(function(){
        $("#loading_gif").css({'display':'block'});
        $("#submit").html = "processing......";
        
        // get the values of the input fields 
        
        let username = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
    })
})
   
