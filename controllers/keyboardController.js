function KeyboardController() {
    this.matrixModel = new MatrixModel();
    this.summaryModel = new SummaryModel();
}

KeyboardController.prototype.onKeyPress = function (event) {
    var key;
    switch (event.keyCode) {
        case 38:
            key = 'up';
            break;
        case 40:
            key = 'down';
            break;
        case 37:
            key = 'left';
            break;
        case 39:
            key = 'right';
            break;
        default:
            console.log('Please, use arrow keys on your keyboard!');
    }
    var total = this.matrixModel.displayActionResult(key);
    this.summaryModel.countTotalScore(total);
};

KeyboardController.prototype.onClickNewGame = function () {
    this.matrixModel.startNewGame();
};