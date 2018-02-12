function KeyboardEvents() {
    this.pubSub = new PubSub();
    this.matrixModel = new MatrixModel();
}

KeyboardEvents.prototype.eventHandler = function () {
    this.pubSub.subscribe('moveUp', this.matrixModel.calcUpAction, this.matrixModel);
    this.pubSub.subscribe('moveDown', this.matrixModel.calcDownAction);
    this.pubSub.subscribe('moveLeft', this.matrixModel.calcLeftAction);
    this.pubSub.subscribe('moveRight', this.matrixModel.calcRightAction);
};


// document.addEventListener('keydown', event, false);
// this.newGameBtn = document.getElementById('newGame');
// this.newGameBtn.addEventListener('click', this.kbdEvents.btnHandler.bind(this.kbdEvents), false)