var choice = true;
while (choice) {
    
    // catch user option
    var p = prompt("Choose your option: Rock(1) | Paper(2) | Scissor(3)")
    // catch computer option
    // random option
    var comp = Math.random();
    
    if (comp < 0.34) {
        comp = 1;
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 2;
    } else {
        comp = 3;
    }
    
    // make rules
    var result = '';
    if (p == comp) {
        result = "Draw";
    } else if (p == 1) {
        result = (comp == 2) ? "Computer Win. \n You(Rock) vs Computer(Paper)" : "You Win. \n You(Rock) vs Computer(Scissor)";
    } else if (p == 2) {
    result = (comp == 1) ? "Computer Win. \n You(Paper) vs Computer(Rock)" : "You Win. \n You(Paper) vs Computer(Scissor)";
} else if (p == 3) {
    result = (comp == 1) ? "Computer Win. \n You(Scissor) vs Computer(Rock)" : "You Win. \n You(Scissor) vs Computer(Paper)";
} else {
    result = "Invalid Option"
}

// result
alert(result);
choice = confirm("Again?");
}

alert("Thanks for Playing")