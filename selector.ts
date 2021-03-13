const prompter = require("prompt-sync")({ sigint: true });
const helpersWait = require("helpers")
const {
  draco,
  harry,
  crabbe,
  neville,
  luna,
  cho,
  cedric,
  hannah,
} = require("./characters");

function initPlayer() {
  console.clear();
  var player;
  var q1 = prompter("Do you know what character you want to play as? (Y/N) ");

  if (q1 == "y" || q1 == "Y") {
    q1 = "Select your Character: ";
    console.log("\n1: " + harry.name);
    console.log("2: " + draco.name);
    console.log("3: " + crabbe.name);
    console.log("4: " + neville.name);
    console.log("5: " + luna.name);
    console.log("6: " + cho.name);
    console.log("7: " + cedric.name);
    console.log("8: " + hannah.name);

    var q2;
    var validPlayer = false;
    do {
      q2 = prompter(q1);
      validPlayer =
        q2 == "1" ||
        q2 == "2" ||
        q2 == "3" ||
        q2 == "4" ||
        q2 == "5" ||
        q2 == "6" ||
        q2 == "7" ||
        q2 == "8";
      if (!validPlayer) {
        console.log("Not valid - try again");
      }
    } while (!validPlayer);

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
  } else {
    q1 = "Which do you value most in a friend? ";

    console.log("\n1 - Ambition");
    console.log("2 - Intelligence");
    console.log("3 - Kindness");
    console.log("4 - Bravery");
    var validNum;
    var q2;
    do {
      q2 = prompter(q1);
      validNum = q2 == "1" || q2 == "2" || q2 == "3" || q2 == "4";
      if (!validNum) {
        console.log("Not valid - try again");
      }
    } while (!validNum);

    switch (q2) {
      case "1":
        console.log("\nYou are Slytherin\n");
        var q3 = prompter("Do you come up with all plans? (Y/N) ");

        if (q3 == "y" || q3 == "Y") {
          player = draco;
        } else {
          player = crabbe;
        }

        break;

      case "2":
        console.log("\nYou are Ravenclaw\n");
        var q3 = prompter(
          "Do you believe in the Crumple-Horned Snorkacks? (Y/N) "
        );

        if (q3 == "y" || q3 == "Y") {
          player = luna;
        } else {
          player = cho;
        }
        break;

      case "3":
        console.log("\nYou are Hufflepuff\n");
        var q3 = prompter("Are you good at Quidditch? (Y/N) ");

        if (q3 == "y" || q3 == "Y") {
          player = cedric;
        } else {
          player = hannah;
        }
        break;

      case "4":
        console.log("\nYou are Gryffindor\n");
        var q3 = prompter("Are you forgetful? (Y/N) ");

        if (q3 == "y" || q3 == "Y") {
          player = neville;
        } else {
          player = harry;
        }
        break;
    }
  }

  console.log("\nHello there, " + player.name + " of " + player.house);
  helpersWait.wait(2000);
  return player;
}

module.exports = {
  initPlayer: initPlayer,
};
