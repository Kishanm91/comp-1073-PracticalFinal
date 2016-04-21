// custom js for roller dice applet

function rollDice() { 
	//Creating variable for html ids
    var dice1 = document.getElementById("dice1"); 
    var dice2 = document.getElementById("dice2");
    var status = document.getElementById("status");
	//When function is called,this will randomly generate a number
    var d1 = Math.floor(Math.random() * 6) + 1; 
    var d2 = Math.floor(Math.random() * 6) + 1;
	
	//Outputs dices from assets/images folder
    document.getElementById('result').innerHTML = '<img src="Assets/images/dice-' + d1 + '.png">'; 
    document.getElementById('result').innerHTML += '<img src="Assets/images/dice-' + d2 + '.png">';
    // display total
	var diceTotal = d1 + d2; 
    // display output generated
	dice1.innerHTML = d1; 
    dice2.innerHTML = d2;
	
	// output total
    status.innerHTML = "You rolled " + diceTotal + "."; 
    if (d1 == d2) {
        status.innerHTML += " ."; 
    }
}
