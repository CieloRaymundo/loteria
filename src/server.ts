const WebSocket = require('ws');

import Game from './classes/Game';
import Player from './classes/Player';
import Deck from "./classes/Deck";
 
const wss = new WebSocket.Server({ port: 8080 });

const clients: any = {};
let id = 0;

const game = new Game ();
const deck = new Deck ();

deck.initializeDeck();
 
wss.on('connection', function connection(ws: any) {
    id++;
    const player: any = new Player('cielo', id);
    clients[id] = player;

    // the first client to website is the host
    if (player.id == 1){
        player.isHost = true;
    }

    game.players.push(player);

    ws.on('open', function (){
        console.log('connection opened');
    });
    
    ws.on('message', function incoming(message: any) {
    //   if (message === 'play') { 
    //   ///
    //   }
        if (message === 'new player'){
            
        }

        console.log('received: %s', message);
    });
    
    ws.send(`${clients[id].isHost}`);

    ws.on('close', function (){
        console.log('connection closed');
    });

    ws.on('error', function(err: any) {
    console.error('errrrooor', err)
    })
});
