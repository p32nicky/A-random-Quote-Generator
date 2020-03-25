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

 
 //Random Color BackGround
 //Random number generator for each RGB number then assigns to background color
 var colorNumberOne = 0;
 var colorNumberTwo = 0;
 var colorNumberThree = 0;

colorNumberOne = Math.floor(Math.random(parseInt) * 999);
colorNumberTwo = Math.floor(Math.random(parseInt) * 999);
colorNumberThree = Math.floor(Math.random(parseInt) * 999);
document.body.style.backgroundColor = 'rgb(' + colorNumberOne + ',' + colorNumberTwo + ',' + colorNumberThree + ')';
 
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
    Year: null},
  { Quote: "Fashten your seat belts. It's going to be a bumpy night.",
    Source: "Margo Channing",
    Citation: "All About Eve",
    Year: null
  },
  { Quote: "Bond. James Bond",
    Source: "Sean Connery",
    Citation: "James Bond",
    Year: 1962
  },
  { Quote: "Don’t you know a sarcasm when you hear it?",
    Source: "Lucy",
    Citation: null,
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
  var number = Math.floor(Math.random() * quotes.length);
  var chosenQuote = quotes[number];
  console.log(chosenQuote);
  return chosenQuote; 
}

// `printQuote` function

var onPageDisplay = '';
function printQuote(chosenQuote){
  var outputString = getRandomQuote(chosenQuote);
  onPageDisplay = "<p class= 'quote' > chosenQuote.Quote</p>";
  onPageDisplay += "<p class= 'source'> chosenQuote.Source";
 
 if(chosenQuote.Citation === 'null'){
      onPageDisplay += '<span class>= "citation" chosenQuote.Citation </span>';
  }else if(chosenQuote.Year === 'null'){
      onPageDisplay += '<span class>= "year" chosenQuote.Year </span>';
  }
  onPageDisplay += '+ </p>';
  return onPageDisplay;
}

document.getElementById('quote-box').innerHTML = printQuote; 
document.getElementById('load-quote').addEventListener("click", printQuote, false);




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 * 
 * 
  }
  */
//-->
