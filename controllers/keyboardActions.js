function KeyboardEvents() {
    this.matrixModel = new MatrixModel();
}

KeyboardEvents.prototype.init = function(event) {
    switch (event.keyCode) {
        case 38:
            this.matrixModel.calculateUpAction();
            break;
        case 40:
            this.matrixModel.calculateDownAction();
            break;
        case 37:
            this.matrixModel.calculateLeftAction();
            break;
        case 39:
            this.matrixModel.calculateRightAction();
            break;
        default:
            alert('Choose right keyboard!')
    }
};

KeyboardEvents.prototype.btnHandler = function () {
    console.log('click');
};