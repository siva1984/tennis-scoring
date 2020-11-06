// Entry file to simulate a match
const Match = require("./Match");

const player1 = "Roger Federer";
const player2 = "Rafael Nadal";

const match = new Match(player1, player2);
const players = [player1, player2];
let pointsPlayed = 1;

console.log(`Start of Match: ${player1} ${match.score()} ${player2}\n`);

// this will run a 1 set simulation
while (!match.gameOver) {
    const player = Math.floor(Math.random() * players.length);

    console.log(match.pointWonBy(players[player]));

    pointsPlayed++;

    // show current match score at a random fixed interval of points played
    if (pointsPlayed === 8) {
        console.log(`Current score is: ${match.score()}`);
        pointsPlayed = 1;
    }
}

console.log(`Final score is: ${player1} ${match.score()} ${player2}`);

/*-------------------------------------------------------
Uncomment the lines below to run a single game simulation
-------------------------------------------------------*/
// console.log(match.pointWonBy(player1));
// console.log(match.pointWonBy(player2));
// // this will return "0-0, 15-15"
// console.log(match.score());

// console.log(match.pointWonBy(player1));
// console.log(match.pointWonBy(player1));
// // this will return "0-0, 40-15"
// console.log(match.score());

// console.log(match.pointWonBy(player2));
// console.log(match.pointWonBy(player2));
// // this will return "0-0, Deuce"
// console.log(match.score());

// console.log(match.pointWonBy(player1));
// // this will return "0-0, Advantage player 1"
// console.log(match.score());

// console.log(match.pointWonBy(player1));
// // this will return "1-0"
// console.log(match.score());
