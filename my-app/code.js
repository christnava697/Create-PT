//Lists and Variables
//nomineeList is a list of nominees from the Grammy Winners dataset in code.org
var nomineeList = getColumn("Grammy Winners", "Nominee");
//categoryList is a list of categories from the Grammy Winners dataset in code.org 
var categoryList = getColumn("Grammy Winners", "Category");
//yearList is a list of years from the Grammy Winners dataset in code.org
var yearList = getColumn("Grammy Winners", "Year");
var winnersThatYear = [];
var triviaYear;
var randomNum = 0;

//Starts the Grammy Trivia quiz and gets the info from the getTriviaInfo function. 
onEvent("startBtn", "click", function( ) {
  getTriviaInfo();
});

//Allows the user to play the Grammy Trivia Quiz again and takes the user back to the Start Screen. 
onEvent("playagainBtn", "click", function( ) {
  setScreen("startScreen");
});

//Selects a random number from the yearList list and gets all the information of the Grammy of that random year. 
//Gets the information from the getAllWinnersThatYear function and includes the yearList and randomNum variabes. 
onEvent("randomYearBtn", "click", function( ) {
  randomNum = randomNumber(0, yearList.length);
  getAllWinnersThatYear(yearList[randomNum]);
});

//This on event triggers the trivia and answerResultslabel making this the backbone of the whole code itslef.
onEvent("submitBtn", "click", function( ) {
  if (triviaYear == getText("yearInput")) {
    setText("answerResultLabel", "Correct! The year was " + triviaYear + ".");
  } else {
    setText("answerResultLabel", "Wrong. The year was " + triviaYear + ".");
  }
  setScreen("resultScreen");
  getAllWinnersThatYear(getText("yearInput"));
});


//The randomNum (randomNumber) set of code triggers the getTriviaInfo function. 
function getTriviaInfo() {
  randomNum = randomNumber(0, yearList.length);
  setScreen("gameScreen");
  setText("categoryTextArea", categoryList[randomNum]);
  setText("nomineeTextArea", randomNum);
  setText("yearInput", "");
  triviaYear = yearList[randomNum];
}

//This part of the code the getAllWinnersThatYear will begin the process that when triviaYear which will show you the year the grammy came out. 
function getAllWinnersThatYear(inputYear) {
  winnersThatYear = [];
  appendItem(winnersThatYear, "Year: " + inputYear);
  for (var i = 0; i < yearList.length; i++) {
    if (yearList[i] == inputYear) {
      appendItem(winnersThatYear, nomineeList[i]);
    }
  }
  if (winnersThatYear.length < 2) {
    appendItem(winnersThatYear, " No Grammy winners for this year. ");
  } else {
    appendItem(winnersThatYear, "-*- That is all for today! -*-");
  }
  setText("otherWinnersTextArea", winnersThatYear.join ("\n"));
}
onEvent("startBtn", "click", function( ) {
  playSound("assets/category_female_voiceover/five_female.mp3", false);
});
onEvent("submitBtn", "click", function( ) {
  playSound("assets/category_male_voiceover/five_male.mp3", false);
});
