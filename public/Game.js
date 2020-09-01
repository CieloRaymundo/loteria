class Game {
    constructor() {
        this.isGameWon = false;
        this.players = [];
    }
    start() {
        this.players.forEach(player => {
            player.canPlay = true;
        });
    }
    // player will have type of PlayerInterface
    checkLoteria(player, deck) {
        // if the iconId in the array that the player has marked is not in the called cards, it hasnt been called and the player can no longer play
        // if ALL cards in the playercard.markedIcons are in deck.calledIcons then 
        const playerMarked = player.playerCard.markedIcons; // array of icon ids
        const deckCalledIcons = deck.calledIcons; // array of icons
        // targetArray.every(function(val) { return array1.indexOf(val) >= 0; })
        let includesAll = playerMarked.every(function (iconId) { return deckCalledIcons.indexOf(iconId) >= 0; });
        let hasRow = false;
        const conditions = [
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
        for (let i = 0; i < conditions.length; i++) {
            const [first, second, third, fourth] = conditions[i];
            let card = player.playerCard;
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
            this.players.forEach(player => {
                player.canPlay = true;
            });
            player.canPlay = false;
            return false;
        }
    }
}
export default Game;
