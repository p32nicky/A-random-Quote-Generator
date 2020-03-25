/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/* - Movie quotes taken from 
https://www.marieclaire.com/culture/g19738923/most-iconic-movie-quotes-year-you-were-born/
*/
// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


 //`quotes` array 
 var quotes = [
  { Quote: "Frankly my dear, I don't give a damn",
    Source: "Clark Gable",
    Citation: "Gone with the Wind",
    Year: 1939
  },
  { Quote: "Here's looking at you, kid",
    Source: "Humphrey Bogart",
    Citation: "Casablanca",
    Year: 1942
  },
  { Quote: "Fashten your seat belts. It's going to be a bumpy night.",
    Source: "Margo Channing",
    Citation: "All About Eve",
    Year: 1950
  },
  { Quote: "Bond. James Bond",
    Source: "Sean Connery",
    Citation: "James Bond",
    Year: 1962
  },
  { Quote: "Don’t you know a sarcasm when you hear it?",
    Source: "Lucy",
    Citation: "A Charlie Brown Christmas",
    Year: 1965
  }
]

//Checking output in console
/*for (var i = 0; i<=4; i+= 1){
  console.log(quotes[i]);
}
*/

// * `getRandomQuote` function
function getRandomQuote() {
  console.log(quotes.length);
  var number = Math.floor(Math.random() * quotes.length + 1);
  var chosenQuote = quotes[number];
  console.log(chosenQuote);
  return chosenQuote; 
}

// `printQuote` function

var outputString = '';

function printQuote(chosenQuote){
  getRandomQuote(chosenQuote);
  outputString += getRandomQuote[];
  outputString += getRandomQuote[];
  outputString += getRandomQuote[];
  outputString += getRandomQuote[];
  alert(outputString);
  return outputString;
}

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

