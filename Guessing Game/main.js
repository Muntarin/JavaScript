//Guess a number from 1 to 5
//Generate a random number between 1 to 5
//Run the game for 5 times
//Show the number of wons and losts

var noOfWon=0;
var noOfLost=0;
for(var i=0;i<=5;i++){
	var numberGuessing = parseInt(prompt(" Enter a number from 1 to 5"));
	var randomNumber = Math.floor(Math.random() *5);

	if(numberGuessing==randomNumber){
		document.write(" You have won " +"<br/>");
		noOfWon++;
	}
	else{
		document.write("You have lost.Random number was " +randomNumber+"<br/>");
		noOfLost++;
	}

}
document.write(" Total number of won = "+ noOfWon +"<br/>");
document.write(" Total number of lost = "+ noOfLost +"<br/>");


