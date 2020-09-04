
import { PlayerCardInterface, PlayerInterface, DeckInterface, IconInterface, GameInterface  } from "../Interfaces";
import Deck from "./Deck.js";
import PlayerCard from "./PlayerCard.js";

class Player implements PlayerInterface{
    id: number;
    username: string;
    isHost: boolean;
    canPlay: boolean;
    playerCard: PlayerCardInterface;

    constructor(username: string, id: number) {
        this.id = id;
        this.username = username;
        this.isHost = false;
        this.canPlay = false;
        this.playerCard = new PlayerCard();
    }

    // can pull card from deck
    turnOverCard(deck: DeckInterface): any{
        if(this.canPlay) {
            const calledIcon: any = deck.icons.pop();
            deck.calledIcons.push(calledIcon.id);
            return calledIcon;
        }
    }

    callLoteria(game: GameInterface): void{ // gives ability to freeze other players?  or do that and check if there are 4 in a row?
        game.players.forEach(player => {
            player.canPlay = false;
        })
    }

    getPlayerCard(): PlayerCardInterface {
        let cards: DeckInterface = new Deck();
        cards.initializeDeck();
        cards.shuffle();

        for (let i:number = 0; i < 16; i++){
            this.playerCard.icons.push(cards.icons[i]);
        }

        return this.playerCard;
    }
}

export default Player;