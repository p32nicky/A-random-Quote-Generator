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
 //Set it to the on click listener
function colorBackGround(){
  var colorNumberOne = 0;
  var colorNumberTwo = 0;
  var colorNumberThree = 0;

  colorNumberOne = Math.floor(Math.random(parseInt) * 999);
  colorNumberTwo = Math.floor(Math.random(parseInt) * 999);
  colorNumberThree = Math.floor(Math.random(parseInt) * 999);
  document.body.style.backgroundColor = 'rgb(' + colorNumberOne + ',' + colorNumberTwo + ',' + colorNumberThree + ')';
}
 
// * `getRandomQuote` function
function getRandomQuote() {
  colorBackGround();
  console.log(quotes.length);
  var number = Math.floor(Math.random() * quotes.length);
  var chosenQuote = quotes[number];
  console.log(chosenQuote);
  return chosenQuote; 
}

// `printQuote` function
var onPageDisplay = '';
colorBackGround();
function printQuote(){
  var outputString = getRandomQuote();
  onPageDisplay = '<p class= "quote">' + outputString.quote + '</p>';
  onPageDisplay += '<p class= "source">' + outputString.source;
 
  // Checking which fields exist for the quote and building string from that
  // Test's if
 if(outputString.citation && outputString.year){
      onPageDisplay += '<span class= "citation">' + outputString.citation + '</span>';
      onPageDisplay += '<span class= "year">' + outputString.year + '</span>';
  }if(outputString.citation){
      onPageDisplay += '<span class= "citation">' +  outputString.citation + '</span>';
  }if (outputString.year){
      onPageDisplay += '<span class= "year">' +  outputString.year + '</span>';
  }if (outputString.tag){
    onPageDisplay += '<span class= "tags">' +  outputString.tag + '</span>';
  }
 
  onPageDisplay += '</p>';
  document.getElementById('quote-box').innerHTML = onPageDisplay; 
 
}

//Click listener to run printQuote and color changing (---moved color change to printQuote function)
document.getElementById('load-quote').addEventListener("click", printQuote, false);
//document.getElementById('load-quote').addEventListener("click", colorBackGround, false);
//Fresh window every 20 seconds
window.setInterval(printQuote, 20000);


/*
function resetQuote(){
   //20 Second Timer
   var quoteRefresh = window.setInterval(printQuote, colorBackGround, 20000);
  }
*/

