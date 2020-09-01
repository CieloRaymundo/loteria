// Icon:
export interface IconInterface {
    name: string;
    id: number;
    imgUrl: string;
    isMarked: boolean;
}

// Deck:
export interface DeckInterface {
    icons: IconInterface [];
    calledIcons: number [];
    initializeDeck: () => void;
    shuffle: () => void;
}

// PlayerCard:
export interface PlayerCardInterface {
    icons: IconInterface []; // 16 array of Icon objects
    markedIcons: number []; // holds ids of the icons the player has marked
    markIcon: (index: number) => void;
}

// Player:
export interface PlayerInterface {
    id: number;
    username: string;
    isHost: boolean;
    canPlay: boolean;
    playerCard: PlayerCardInterface;

    getPlayerCard:() =>  PlayerCardInterface;
    turnOverCard: (deck: DeckInterface) => IconInterface;
    callLoteria: (game: GameInterface) => void;
}

// Game:
export interface GameInterface{
    isGameWon: boolean;
    players: PlayerInterface [];

    start: () => void;
    checkLoteria: (layer: any, deck: DeckInterface) => boolean;
}
