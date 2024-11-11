// 1. The computer will generate a random number between 1 and 100.
// 2. The player will have 6 attempts to guess the number.
// 3. After each guess, the computer will tell the player if their guess was higher or lower than the number.
// 4. If the player guesses the number correctly, they win! If they use all 6 attempts without guessing correctly, they lose.


var randomNumber = Math.floor(Math.random() * 100) + 1; // Ensures range is 1 to 100
var attempts = 10;

while (attempts > 0) {
    var playerGuess = parseInt(prompt(`Guess a number between 1 and 100\nAttempts left: ${attempts}`));
    
    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
        alert("Invalid choice. Please enter a number between 1 and 100.");
        continue;
    } 

    attempts--;

    if (playerGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number!");
        break;
    } else if (playerGuess < randomNumber) {
        alert("Too low! Try a higher number.");
    } else {
        alert("Too high! Try a lower number.");
    }

    if (attempts === 0) {
        alert(`Sorry, you've run out of attempts. The correct number was ${randomNumber}.`);
    }
}