"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Icon_js_1 = __importDefault(require("./Icon.js"));
var Deck = /** @class */ (function () {
    function Deck() {
        this.icons = [];
        this.calledIcons = [];
    }
    Deck.prototype.initializeDeck = function () {
        var _this = this;
        var icons = ["El gallo", "El diablito", "La dama", "El catrín", "El paraguas ", "La sirena", "La escalera", "La botella", "El barril", "El árbol", "El melón", "El valiente ", "El gorrito", "La muerte", " La pera", "La bandera", "El bandolón ", "El violoncello", "La garza", "El pájaro", "La mano", "La bota", "La luna", "El cotorro", "El borracho", "El negrito", "El corazón", "La sandía", "El tambor", "El camarón", "Las jaras", "El musico", "La araña", "El soldado", "La estrella", "El cazo", "El mundo", "El Apache", "El nopal", "El alacrán", "La rosa", "La calavera", "La campana", "El cantarito", "El venad", "El Sol", "La corona", "La chalupa", "El pino", "El pescado", "La palma", "La maceta", "El arpa", "La rana"];
        var id = 1;
        icons.forEach(function (icon) {
            _this.icons.push(new Icon_js_1["default"](icon, id, ''));
            id++;
        });
    };
    Deck.prototype.shuffle = function () {
        var j;
        var x;
        for (var i = this.icons.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.icons[i];
            this.icons[i] = this.icons[j];
            this.icons[j] = x;
        }
    };
    return Deck;
}());
exports["default"] = Deck;
