console.log('hi from serverjs')
const WebSocket = require('ws');

// const User = require('./user.js')

// import Game from './public/classes/Games.js';
// const Player = require('./public/classes/Player');
// import Player from './public/classes/Player';
// import Deck from "./public/classes/Deck.js";

// // server
 
const wss = new WebSocket.Server({ port: 8080 });

const clients = {};
const games = {};
let id = 0;
 
wss.on('connection', function connection(ws) {
    id++;
    let newPlayer = new Player('cielo', id);
    clients[id] = newPlayer;

    ws.on('open', function (){
        console.log('connection opened');
    });
    
    ws.on('message', function incoming(message) {
    //   if (message === 'play') { 
    //   ///
    //   }

        console.log('received: %s', message);
    });
    
    ws.send(clients[id]);

    ws.on('close', function (){
        console.log('connection closed');
    });

    ws.on('error', function(err) {
    console.error('errrrooor', err)
    })
});
