import Deck from "./Deck.js";
import PlayerCard from "./PlayerCard.js";
class Player {
    constructor(username, id) {
        this.id = id;
        this.username = username;
        this.isHost = false;
        this.canPlay = false;
        this.playerCard = new PlayerCard();
    }
    // can pull card from deck
    turnOverCard(deck) {
        if (this.canPlay) {
            const calledIcon = deck.icons.pop();
            deck.calledIcons.push(calledIcon.id);
            return calledIcon;
        }
    }
    callLoteria(game) {
        game.players.forEach(player => {
            player.canPlay = false;
        });
    }
    getPlayerCard() {
        let cards = new Deck();
        cards.initializeDeck();
        cards.shuffle();
        for (let i = 0; i < 16; i++) {
            this.playerCard.icons.push(cards.icons[i]);
        }
        return this.playerCard;
    }
}
export default Player;
