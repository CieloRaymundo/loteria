import {IconInterface, DeckInterface} from "../Interfaces";
import Icon from "./Icon.js"

class Deck implements DeckInterface {
    icons: IconInterface [];
    calledIcons: number []; // id of icons
    constructor() {
        this.icons = [];
        this.calledIcons = [];
    }

    initializeDeck(): void {
        const icons: string [] = ["El gallo", "El diablito", "La dama", "El catrín", "El paraguas ", "La sirena", "La escalera", "La botella", "El barril", "El árbol", "El melón", "El valiente ", "El gorrito", "La muerte", " La pera", "La bandera", "El bandolón ", "El violoncello","La garza", "El pájaro", "La mano", "La bota", "La luna", "El cotorro",  "El borracho", "El negrito", "El corazón", "La sandía", "El tambor", "El camarón", "Las jaras", "El musico", "La araña", "El soldado", "La estrella", "El cazo", "El mundo", "El Apache", "El nopal", "El alacrán", "La rosa", "La calavera", "La campana", "El cantarito", "El venad", "El Sol", "La corona", "La chalupa", "El pino", "El pescado", "La palma", "La maceta", "El arpa", "La rana"];

        let id: number = 1;
        icons.forEach(icon => {
            this.icons.push(new Icon(icon, id, ''));
            id++
        });
    }

    shuffle(): void{
        let j: number;
        let x: IconInterface;

        for (let i: number = this.icons.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.icons[i];
            this.icons[i] = this.icons[j];
            this.icons[j] = x;
        }
    }
}

export default Deck