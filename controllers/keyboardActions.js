function KeyboardEvents() {
    this.keyActions = {
        up: 38,
        down: 40,
        left: 37,
        right: 39
    }
}

KeyboardEvents.prototype.moveUp = function () {
    console.log(this.keyActions.up);
};

KeyboardEvents.prototype.moveDown = function () {

};

KeyboardEvents.prototype.moveLeft = function () {

};

KeyboardEvents.prototype.moveRight = function () {

};