"use strict";
exports.__esModule = true;
var PlayerCard = /** @class */ (function () {
    function PlayerCard() {
        this.icons = [];
        this.markedIcons = [];
    }
    // mark them false in order to check for winning conditions?
    PlayerCard.prototype.markIcon = function (index) {
        this.markedIcons.push(this.icons[index].id);
        this.icons[index].isMarked = true;
    };
    return PlayerCard;
}());
exports["default"] = PlayerCard;
