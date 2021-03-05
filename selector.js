const prompt = require('prompt-sync')();
let Characters = require("./characters");



var q1 = prompt("Do you know what character you want to play as?");

if (q1.includes("y")) {
    q1 = "Select your Character";
}

else {
    q1 = "What do you value most in a friend?";

    console.log("1 - Ambision")
    console.log("2 - Intelligence")
    console.log("3 - Kindness")
    console.log("4 - Bravery")


}




var q2 = prompt(q1);

/*
if (q2 == "1") {q2 = "who comes up with all plans";}
if (q2 == "2") {q2 = "Do you believe in the Crumple-Horned Snorkacks"}
if (q2 == "3") {q2 = "Are you good at Quidditch";}
if (q2 == "4") {q2 = "Are you accident-prone >";}
*/

switch (q2) {
    case "1":
        console.log("You are Slytherin")
        var q3 = prompt("Do you comes up with all plans? ")

        if (q3.includes("y")) {
            let player = "Draco Malfoy";
            console.log(player);
            
        }
        
        else {
            let player = "Vincent Crabble";
            console.log(player);
            
        }

      break;


    case "2":
        console.log("You are Ravenclaw")
        var q3 = prompt("Do you believe in the Crumple-Horned Snorkacks? ")

        if (q3.includes("y")) {
            let player = "Luna Lovegood";
            console.log(player);
            
        }
        
        else {
            let player = "Cho Chang";
            console.log(player);
        }
      break;


    case "3":
        console.log("You are Hufflepuff")
        var q3 = prompt("Are you good at Quidditch? ")

        if (q3.includes("y")) {
            let player = "Cedric Diggory";
            console.log(player);
        }

        else {
            let player = "Hannah Abbott";
            console.log(player);
        }
      break;
    
    case "4":
        console.log("You are Gryffindor")
        var q3 = prompt("Are you accident-prone? ")

        if (q3.includes("y")) {
            let player = "Harry Potter";
            console.log(player);
        }

        else {
            let player = "Neville Longbottom";
            console.log(player);
        }
      break;
}

