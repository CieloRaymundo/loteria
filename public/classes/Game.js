"use strict";
exports.__esModule = true;
var Game = /** @class */ (function () {
    function Game() {
        this.isGameWon = false;
        this.players = [];
    }
    Game.prototype.start = function () {
        this.players.forEach(function (player) {
            player.canPlay = true;
        });
    };
    // player will have type of PlayerInterface
    Game.prototype.checkLoteria = function (player, deck) {
        // if the iconId in the array that the player has marked is not in the called cards, it hasnt been called and the player can no longer play
        // if ALL cards in the playercard.markedIcons are in deck.calledIcons then 
        var playerMarked = player.playerCard.markedIcons; // array of icon ids
        var deckCalledIcons = deck.calledIcons; // array of icons
        // targetArray.every(function(val) { return array1.indexOf(val) >= 0; })
        var includesAll = playerMarked.every(function (iconId) { return deckCalledIcons.indexOf(iconId) >= 0; });
        var hasRow = false;
        var conditions = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15],
            [0, 5, 10, 15],
            [3, 6, 9, 12],
            [0, 4, 8, 12],
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15]
        ];
        console.log(includesAll);
        for (var i = 0; i < conditions.length; i++) {
            var _a = conditions[i], first = _a[0], second = _a[1], third = _a[2], fourth = _a[3];
            var card = player.playerCard;
            // if all icons at this index have isMarked as true then the player has 4 in a row
            if (card.icons[first].isMarked && card.icons[second].isMarked && card.icons[third].isMarked && card.icons[fourth].isMarked) {
                hasRow = true;
            }
        }
        console.log(hasRow);
        if (includesAll && hasRow) {
            this.isGameWon = true;
            return true;
        }
        else {
            this.players.forEach(function (player) {
                player.canPlay = true;
            });
            player.canPlay = false;
            return false;
        }
    };
    return Game;
}());
exports["default"] = Game;
