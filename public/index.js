import Game from "./classes/Game.js";
import Player from "./classes/Player.js";
import Deck from "./classes/Deck.js";
let game = new Game();
let deck = new Deck();
// basic initiation of decks and icons and deck 
deck.initializeDeck();
// new players
let player1 = new Player('cielo', 1);
let player2 = new Player('cielo2', 2);
let player3 = new Player('cielo3', 3);
let player4 = new Player('cielo4', 4);
// first player into game is the host
player1.isHost = true;
// after all players get to site they are added to game
game.players.push(player1);
game.players.push(player2);
game.players.push(player3);
game.players.push(player4);
let pulledCards = [];
// once added to game they can now play
game.players.forEach(player => {
    player.canPlay = true;
    player.getPlayerCard();
    let nextCard = player.turnOverCard(deck);
    pulledCards.push(nextCard);
});
player1.playerCard.markIcon(0);
player1.playerCard.markIcon(1);
player1.playerCard.markIcon(2);
player1.playerCard.markIcon(3);
console.log(pulledCards);
console.log(game);
console.log(deck);
player1.callLoteria(game);
console.log(game);
game.checkLoteria(player1, deck);
console.log(game);
