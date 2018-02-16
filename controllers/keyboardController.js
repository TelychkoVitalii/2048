function KeyboardController() {
    this.matrixModel = new MatrixModel();
}

KeyboardController.prototype.onKeyPress = function (event) {
    switch (event.keyCode) {
        case 38:
            this.matrixModel.calcUpAction();
            break;
        case 40:
            this.matrixModel.calcDownAction();
            break;
        case 37:
            this.matrixModel.calcLeftAction();
            break;
        case 39:
            this.matrixModel.calcRightAction();
            break;
        default:
            alert('Please, use arrow keys on your keaboard!');
    }
};