"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Deck_js_1 = __importDefault(require("./Deck.js"));
var PlayerCard_js_1 = __importDefault(require("./PlayerCard.js"));
// const Deck = require("./Deck.js")
// const PlayerCard = require("./PlayerCard.js")
var Player = /** @class */ (function () {
    function Player(username, id) {
        this.id = id;
        this.username = username;
        this.isHost = false;
        this.canPlay = false;
        this.playerCard = new PlayerCard_js_1["default"]();
    }
    // can pull card from deck
    Player.prototype.turnOverCard = function (deck) {
        if (this.canPlay) {
            var calledIcon = deck.icons.pop();
            deck.calledIcons.push(calledIcon.id);
            return calledIcon;
        }
    };
    Player.prototype.callLoteria = function (game) {
        game.players.forEach(function (player) {
            player.canPlay = false;
        });
    };
    Player.prototype.getPlayerCard = function () {
        var cards = new Deck_js_1["default"]();
        cards.initializeDeck();
        cards.shuffle();
        for (var i = 0; i < 16; i++) {
            this.playerCard.icons.push(cards.icons[i]);
        }
        return this.playerCard;
    };
    return Player;
}());
exports["default"] = Player;
