const prompt = require('prompt-sync')();
const { draco, harry, crabbe, neville, luna, cho, cedric, hannah } = require('./characters');
let Characters = require("./characters");


var q1 = prompt("Do you know what character you want to play as? ");

if (q1.includes("y")) {
    q1 = "Select your Character ";
    console.log ("1: " + harry.name)
    console.log ("2: " + draco.name)
    console.log ("3: " + crabbe.name)
    console.log ("4: " + neville.name)
    console.log ("5: " + luna.name)
    console.log ("6: " + cho.name)
    console.log ("7: " + cedric.name)
    console.log ("8: " + hannah.name)

    var player;
    var q2 = prompt(q1);
    switch (q2) {
        case "1":
            player = harry;
            break;

        case "2":
            player = draco;
            break;
            
        case "3":
            player = crabbe;
            break;
            
        case "4":
            player = neville;
            break;
            
        case "5":
            player = luna;
            break;
            
        case "6":
            player = cho;
            break;
            
        case "7":
            player = cedric;
            break;
            
        case "8":
            player = hannah;
            break;
            
    }
}   
  //  console.log ("Hello there" + player.name)
    
 //   let player = q2
 

else {
    q1 = "What do you value most in a friend?";

    console.log("1 - Ambision")
    console.log("2 - Intelligence")
    console.log("3 - Kindness")
    console.log("4 - Bravery")
    var validNum = 0;
    var q2;
    do {
        q2 = prompt(q1);
        validNum = (q2 == "1") || (q2 == "2") || (q2 == "3") || (q2 == "4") ;
        if ( !validNum){
            console.log("not Valid - try again");
        }
    } while ( !validNum)

    switch (q2) {
        case "1":
            console.log("You are Slytherin")
            var q3 = prompt("Do you comes up with all plans? ")
    
            if (q3.includes("y")) {
                player = draco;
                
            }
            
            else {
                player = crabbe;
            }
    
          break;
    
    
        case "2":
            console.log("You are Ravenclaw")
            var q3 = prompt("Do you believe in the Crumple-Horned Snorkacks? ")
    
            if (q3.includes("y")) {
                player = luna;
                
            }
            
            else {
                player = cho;
            }
          break;
    
    
        case "3":
            console.log("You are Hufflepuff")
            var q3 = prompt("Are you good at Quidditch? ")
    
            if (q3.includes("y")) {
                player = cedric;
            }
    
            else {
                player = hannah;
            }
          break;
        
        case "4":
            console.log("You are Gryffindor")
            var q3 = prompt("Are you accident-prone? ")
    
            if (q3.includes("y")) {
                player = harry;
            }
    
            else {
                player = neville;
            }
          break;
    }
    
}

console.log(player)


//var q2 = prompt(q1);

/*
if (q2 == "1") {q2 = "who comes up with all plans";}
if (q2 == "2") {q2 = "Do you believe in the Crumple-Horned Snorkacks"}
if (q2 == "3") {q2 = "Are you good at Quidditch";}
if (q2 == "4") {q2 = "Are you accident-prone >";}
*/


console.log ("Hello there " + player.name + " of " + player.house);


//console.log (player);

