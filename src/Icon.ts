import {IconInterface} from "./Interfaces";

class Icon implements IconInterface{
    name: string;
    id: number;
    imgUrl: string;
    isMarked: boolean;

    constructor(name: string, id: number, imgUrl: string){
        this.name = name;
        this.id = id;
        this.imgUrl = imgUrl;
        this.isMarked = false;
    }
}

export default Icon
