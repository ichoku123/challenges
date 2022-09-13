// DATA TYPES

var yourAge = 19;
var yourName = "paul";
var name = {first:"paul", last:"chimere"}; // AN object 
var groceries =[ "apple", "banana", "oranges"];// AN array

// STRINGS IN JAVASCRIPT (COMMON METHODS)

var fruit = "banana";
var More_Fruits = "BANANA/ Apple"
console.log(fruit.lastIndexOf("nan"));

console.log(fruit.length);
console.log(fruit.slice(2,));
console.log(fruit.replace("ban", "Ant"));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));

// Array

var fruits = ["banana", "Apple", "Orange", "pineapples"];
var fruits = new Array("banana", "Apple", "Orange", "pineapples");// Another Method of creating an array
console.log(fruits[2]); // For accesing values

fruits[0] = "pear";
document.write(fruits);
var vegetables = ["Tomato","Brocoli", "onions"]
var allGroceries = fruits.concat(vegetables);// Combine arrays
console.log(allGroceries);
console.log(allGroceries.reverse());
//sorting Alphabetically
console.log(allGroceries.sort());

// Sorting of numbers
var Some_Numbers = [5, 10, 25, 3, 255, 1, 4, 334, 2];
console.log(Some_Numbers.sort(function(a, b){return a -b }));  // Ascending order

console.log(Some_Numbers.sort(function(a, b){return b - a })); // Descending Order

// Switch statement
// Day 0 = Sunday(weekend)
// Day 6 = saturday(weekend)
// Day 5 = friday(weekend)
// Day 1-4 = MON - THURS(week-days)

switch (6 ){
    case 0:
        text = "weekend";
        break;
    case 5:
        text = "weekend";
         break;
    case 6:
        text = "weekend";
         break;
    default:
        text = "weekday";
}
console.log(text);



function age_inDAYS(){
    var aget = prompt("whats your birth year");
    var age_indays = (2021 - aget) * 1;
    var create_h1ELE = document.createElement("h1");
    var text_Answer = document.createTextNode("You are " + age_indays + "year old....")
    create_h1ELE.setAttribute("id", "ageindays");
    create_h1ELE.appendChild(text_Answer);
    document.getElementById("flex-box-result").appendChild(create_h1ELE); // It appends the create_h1ELE inside the the tag by id name (content-box).
    
}
function reset(){
    document.getElementById("ageindays").remove();
    
    
}


/*function ag_indays(){
    var s = prompt (whats your birth year);
    var ag = (2020 - s) * 365;
    var createh3 = document.createElement("h3");
    var Text_node = document.createTextNode("You are" + ag + "days old");
    createh3.setAttribute("id" "h3_tag");
    createh3.appendChild(Text_node);
    
}
*/
// Challenge  2 Generating photos
function generate_watch(){
    var image = document.createElement("img");
    var div = document.getElementById("flex_box_wtch");
    image.src = "img/product/product30.jpg";
    div.appendChild(image);  
}

// Challenge 3: Rock, Paper, Scissors Game

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
   humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer choice:",  botChoice)
    //console.log(botChoice);
    results = decideWinner(humanChoice, botChoice); 
    console.log(results);
    // So we want it to return the results of the game in an array ---> [0,1] human lost, bot won
    message = finalMessage(results);
    console.log(message);
    // so  we want it to return a final message; {'message': "You won", 'color': 'green'}
    rpsFrontend(yourChoice.id, botChoice, message);
    
}

function randToRpsInt(){

     return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, ComputerChoice){
    var rpsDatabase = {
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
         'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
          'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0},
    };
    
    var yourScore = rpsDatabase[yourChoice][ComputerChoice];
    var computerScore = rpsDatabase[ComputerChoice][yourChoice];
    
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    
    if (yourScore === 0){
        return{'message': 'you Lost!', 'color': 'red'};
    }else if(yourScore === 0.5){
            return{'message': 'you tied!', 'color': 'yellow'};
        }else{
            return{'message': 'you won!', 'color': 'green'};
        }
    }

function rpsFrontend(humanImageChoice, botImageChoice, FinalMessage){
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    // Lets remove all the images once we click on one
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement("div");
    var botDiv = document.getElementById("div");
    var messageDiv = document.createElement("div");
    
    humanDiv.innerHTML = "<img src='" + imageDataBase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 7px 30px blue;'>"
    
    botDiv.innerHTML = "<img src='" + imageDataBase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 7px 30px red;'>"
    
    messageDiv.innerHTML = "<h1 style='color:" + FinalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + FinalMessage['message'] + "</h1>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    
}







// Challenge 4 Color challenge
/*
var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

var copyAllbuttons = [];
for(var i = 0; i < all_buttons.length; i++){
    copyAllbuttons.push(all_buttons[i].classList[1]);
}
console.log(copyAllbuttons)
// The main function

function changeButtonsClr(buttonthingy){
    if(buttonthingy.value === "red"){
        buttonRed();
    }else if(buttonthingy.value === "blue"){
        
        buttonBlue();
    }else if(buttonthingy.value === "reset"){
        Buttonreset();
    }else if(buttonthingy.value === "random"){
        Buttonrandom();
    }
}

function buttonRed(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add('btn-danger');
        }
}
function buttonBlue(){
    
    for(i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-primary");
    }
}
 function Buttonrandom(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success','btn-warning']  
 for(i=0; i < all_buttons.length; i++){
     
     var randNumber = Math.floor(Math.random() * 4);
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add(choices[randNumber]);
 }
 
    
}

function Buttonreset(){
    for(i=0; i < all_buttons.length; i++){
     
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllbuttons[i]);
 }
}
*/
/*
var getTagbtn = document.getElementsByTagName("button");
    var copyAllBtn =[];

    for(var i=0; i < getTagbtn.length; i++){
      copyAllBtn.push(getTagbtn[i].classList[1])  
    }
console.log(copyAllBtn)

function mainFunc(thisbtn){
   if(thisbtn.value == "blue"){
       bluebutton();
   }else if(thisbtn.value == "random"){
       randoms();
   }else if(thisbtn.value == "reset"){
       reset();
   }
}

function bluebutton(){
    for(let i=0; i<getTagbtn.length; i++){
        getTagbtn[i].classList.remove(getTagbtn[i].classList[1]);
        getTagbtn[i].classList.add("btn-primary")
    }
}

function random(){
   var multiple_Choices = ["btn-danger", "btn-info", "btn-warning", "btn-success"] 
   for(var i = 0; i<getTagbtn.length; i++){
   var Rand = Math.floor(Math.random() * 4);
    getTagbtn[i].classList.remove(getTagbtn[i].classList[1]);
    getTagbtn[i].classList.add(multiple_Choices[Rand]);
}
    }

function randoms(){
    var choices = ["btn-info", "btn-danger", "btn-warning"];
    for(var i = 0; i < getTagbtn.length; i++){
        var Rand = Math.floor(Math.random() * 3)
        getTagbtn[i].classList.remove(getTagbtn[i].classList[1]);
        getTagbtn[i].classList.add(choices[Rand]);
    }
}
function reset(){
    for(let i = 0; i < getTagbtn.length; i++){
        getTagbtn[i].classList.remove(getTagbtn[i].classList[1]);
        getTagbtn[i].classList.add(copyAllBtn[i]);
    }
}
*/
var gettagName = document.getElementsByTagName("button");
var copyallBtn = [];
for(let i = 0; i<gettagName.length; i++){
    copyallBtn.push(gettagName[i].classList[1]);
}

function main(thss){
    if(thss.value === "random"){
        random();
    }else if(thss.value === "reset"){
        reset();
    }
}

function red(){
    for(let i=0; i<gettagName.length; i++){
        gettagName[i].classList.remove(gettagName[i].classList[1]);
        gettagName[i].classList.add("btn-danger")
    }
}

function reset(){
    for(let i=0; i<gettagName.length; i++){
        gettagName[i].classList.remove(gettagName[i].classList[1]);
        gettagName[i].classList.add(copyallBtn[i]);
    }
}
function random(){
    var choices = ["btn-danger", "btn-info", "btn-success", "btn-warning"];
    for(let i=0; i <gettagName.length; i++){
        var rand = Math.floor(Math.random() * 4);
        gettagName[i].classList.remove(gettagName[i].classList[1]);
        gettagName[i].classList.add(choices[rand]);
    }
}

var count = 0;
while(count < 50){
    console.log("number is : " + count);
    count+=2;
}