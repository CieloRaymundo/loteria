"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Game_js_1 = __importDefault(require("./classes/Game.js"));
var Player_js_1 = __importDefault(require("./classes/Player.js"));
var Deck_js_1 = __importDefault(require("./classes/Deck.js"));
var game = new Game_js_1["default"]();
var deck = new Deck_js_1["default"]();
// basic initiation of decks and icons and deck 
deck.initializeDeck();
// new players
var player1 = new Player_js_1["default"]('cielo', 1);
var player2 = new Player_js_1["default"]('cielo2', 2);
var player3 = new Player_js_1["default"]('cielo3', 3);
var player4 = new Player_js_1["default"]('cielo4', 4);
// first player into game is the host
player1.isHost = true;
// after all players get to site they are added to game
game.players.push(player1);
game.players.push(player2);
game.players.push(player3);
game.players.push(player4);
var pulledCards = [];
// once added to game they can now play
game.players.forEach(function (player) {
    player.canPlay = true;
    player.getPlayerCard();
    var nextCard = player.turnOverCard(deck);
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
