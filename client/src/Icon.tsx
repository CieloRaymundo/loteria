
import React, { useState } from 'react';

// class Icon implements IconInterface{
//     name: string;
//     id: number;
//     imgUrl: string;
//     isMarked: boolean;

//     constructor(name: string, id: number, imgUrl: string){
//         this.name = name;
//         this.id = id;
//         this.imgUrl = imgUrl;
//         this.isMarked = false;
//     }
// }

const Icon = (props: any) => {
    const [name, setName] = useState('');
    const [id, setId] = useState(null);
    const [imgUrl, setImgUrl] = useState('');
    // const [isMarked, setMarked] = useState(false);

    setName(props.name);
    setId(props.id);
    setImgUrl(props.imgUrl);
    // setMarked(props.isMarked);

    return (
        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <img src={imgUrl} alt=''></img>
        </div>
    )
}

export default Icon;