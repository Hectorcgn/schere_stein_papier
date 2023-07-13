
// Buttons, Runden, Punkte, Reset-Button und Gewinner-Element auswählen
const buttons = document.querySelectorAll('#game button');
const rounds = document.querySelectorAll('#rounds input');
const userScore = document.querySelector('#user-score');
const computerScore = document.querySelector('#computer-score');
const resetButton = document.querySelector('#reset');
const winnerDiv = document.querySelector('#winner');

// Punktestand initialisieren
let userPoints = 0;
let computerPoints = 0;

// Funktion, um eine Runde zu spielen
function playRound(userSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    if (userSelection === computerSelection) {
        return 'tie';
    } else if (
    (userSelection === 'rock' && computerSelection === 'scissors') ||
    (userSelection === 'paper' && computerSelection === 'rock') ||
    (userSelection === 'scissors' && computerSelection === 'paper')
    ) {
    return 'win';
        } else {
        return 'lose';
        }
    }

// Funktion, um den Punktestand zu aktualisieren
function updateScore(result) {
    if (result === 'win') {
    userPoints++;
    userScore.textContent = userPoints;
    userScore.classList.add('win');
    computerScore.classList.add('lose');
    } else if (result === 'lose') {
    computerPoints++;
    computerScore.textContent = computerPoints;
    userScore.classList.add('lose');
    computerScore.classList.add('win');
    } else {
    userScore.classList.add('tie');
    computerScore.classList.add('tie');
    }
}

// Funktion, um das Spiel zurückzusetzen
function resetGame() {
    userPoints = 0;
    computerPoints = 0;
    userScore.textContent = userPoints;
    computerScore.textContent = computerPoints;
    userScore.classList.remove('win', 'lose', 'tie');
    computerScore.classList.remove('win', 'lose', 'tie');
    winnerDiv.textContent = '';
}

// Funktion, um den Gewinner zu überprüfen
function checkWinner() {
    if (userPoints >= Number(document.querySelector('input[name="rounds"]:checked').value)) {
    winnerDiv.textContent = 'You won the game!';
    resetGame();
    } else if (computerPoints >= Number(document.querySelector('input[name="rounds"]:checked').value)) {
    winnerDiv.textContent = 'You lost the game!';
    resetGame();
    }
}

// Eventlistener für die Buttons hinzufügen
buttons.forEach(button => {
    button.addEventListener('click', () => {
    const result = playRound(button.id);
    updateScore(result);
    checkWinner();
    });
});

// Eventlistener für den Reset-Button hinzufügen
resetButton.addEventListener('click', resetGame);