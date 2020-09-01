class PlayerCard {
    constructor() {
        this.icons = [];
        this.markedIcons = [];
    }
    // mark them false in order to check for winning conditions?
    markIcon(index) {
        this.markedIcons.push(this.icons[index].id);
        this.icons[index].isMarked = true;
    }
}
export default PlayerCard;
