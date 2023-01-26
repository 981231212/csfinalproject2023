let nombre = document.querySelector("#nombre");
//let color = document.querySelector("#color");//
let place = document.querySelector("#place");
let number = document.querySelector("#number");
//let celebrity = document.querySelector("#celebrity");//
let story = document.querySelector("#story");
let launch = document.querySelector("#launch");
let result = document.querySelector("#result");

//this is the launch button//
launch.addEventListener("click", writeStory, false);

//this part happens after the button is clicked//
function writeStory() {
  let launchedStory = "";
  launchedStory += "<p>Welcome, " + nombre.value + ".</p>";
  //launchedStory += "<p>Your color is: " + color.value + "</p>";//
  launchedStory += "<p>Your place is: " + place.value + ".</p>";
  launchedStory += "<p>Your favorite number is: " + number.value + ".</p>";
  /*launchedStory +=
    "<p> Your favorite celebrity is: " + celebrity.value + ".</p>";*/

  /* if (color.value === "blue") {
    result.innerHTML = "How basic.";
  } else {
    result.innerHTML = "How wonderful.";
  }
}*/

  //this give you the personality score//
  let catBreed = parseInt(number.value) + place.value.length;

  //If the number and the number of characters add up to be more than five, it's going to give you Scottish Fold. You only get different answers when it's less than 5//
  switch (catBreed) {
    case 1:
      launchedStory = "Hot dog";
      break;
    case 2:
      launchedStory = "Sandwich";
      break;
    case 3:
      launchedStory = "Fried rice";
      break;
    case 4:
      launchedStory = "Pizza";
      break;
    default:
      launchedStory = "Taco";
      break;
  }

  story.innerHTML = launchedStory;
}
