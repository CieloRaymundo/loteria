"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var WebSocket = require('ws');
var Game_1 = __importDefault(require("./classes/Game"));
var Player_1 = __importDefault(require("./classes/Player"));
var Deck_1 = __importDefault(require("./classes/Deck"));
var wss = new WebSocket.Server({ port: 8080 });
var clients = {};
var id = 0;
var game = new Game_1["default"]();
var deck = new Deck_1["default"]();
deck.initializeDeck();
wss.on('connection', function connection(ws) {
    id++;
    var player = new Player_1["default"]('cielo', id);
    clients[id] = player;
    // the first client to website is the host
    if (player.id == 1) {
        player.isHost = true;
    }
    game.players.push(player);
    ws.on('open', function () {
        console.log('connection opened');
    });
    ws.on('message', function incoming(message) {
        //   if (message === 'play') { 
        //   ///
        //   }
        if (message === 'new player') {
        }
        console.log('received: %s', message);
    });
    ws.send("" + clients[id].isHost);
    ws.on('close', function () {
        console.log('connection closed');
    });
    ws.on('error', function (err) {
        console.error('errrrooor', err);
    });
});
