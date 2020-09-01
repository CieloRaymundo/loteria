import {IconInterface, PlayerCardInterface} from "./Interfaces";

class PlayerCard implements PlayerCardInterface{
    icons: IconInterface []; 
    markedIcons: number []; 

    constructor() {
        this.icons = [];
        this.markedIcons = [];
    }

    // mark them false in order to check for winning conditions?
    markIcon(index: number): void{
        this.markedIcons.push(this.icons[index].id);
        this.icons[index].isMarked = true;
    }
}

export default PlayerCard