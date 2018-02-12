function KeyboardEvents(matrixModel) {
    this.matrixModel = matrixModel;
}

KeyboardEvents.prototype.eventsHandler = function (object) {
    var actions = [];

    object.publish = function (action, args) {
        if(!actions[action]) return false;
        var subscribers = actions[action],
            len = subscribers.length;
    };

    object.subscribe = function (action, func) {

    };

    // document.addEventListener('keydown', this.pressSpecialKey, false);
    // this.newGameBtn = document.getElementById('newGame');
    // this.newGameBtn.addEventListener('click', this.kbdEvents.btnHandler.bind(this.kbdEvents), false)
};