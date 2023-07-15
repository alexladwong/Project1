// Update Scores
let score = JSON.parse(localStorage.getItem
    ('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElelment();

// Naming Function Section starts Here. 
function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    // Scissors Sections starts here
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You Win.';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }
        // Scissors Sections Ends Here. 


        // Paper Section starts Here. 
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }
        // Paper Section Ends Here.

        // Rock Section starts Here.
    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You Win.';
        }
    }
    // Rock Section Ends Here.     

    if (result === 'You Win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElelment();

    document.querySelector('.js-result').
        innerHTML = result;

    document.querySelector('.js-moves').
        innerHTML = ` You.
                <img src="/${playerMove}-emoji.png" class="icon-button" >
                <img src="/${computerMove}-emoji.png" class="icon-button" >
                Computer.`;
}

function updateScoreElelment() {
    document.querySelector('.js-score')
        .innerHTML = ` Win: ${score.wins}, 
            Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Calling Function Section starts Here.    
function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
} 