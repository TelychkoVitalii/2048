function KeyboardEvents(matrixModel) {
    this.matrixModel = matrixModel;
}

KeyboardEvents.prototype.pressSpecialKey = function(event) {
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

KeyboardEvents.prototype.eventsHandler = function (object) {
    var actions = {};

    object.publish = function (action, args) {
        if(!actions[action]) return false;
        var subscribers = actions[action],
            len = subscribers.length;
    };
    object.subscribe = function (action, func) {

    };
    object.unsubscribe = function (token) {

    };
    document.addEventListener('keydown', this.pressSpecialKey, false);
    // this.newGameBtn = document.getElementById('newGame');
    // this.newGameBtn.addEventListener('click', this.kbdEvents.btnHandler.bind(this.kbdEvents), false)
};