function MatrixModel() {
    this.pubSub = new PubSub();
    this.attributes = {
        size: { width: 4, height: 4 },
        grid: [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ]
    };

    var instance = this;
    MatrixModel = function () {
        return instance;
    };
}

MatrixModel.prototype.calcUpAction = function () {
    this.pubSub.publish('moveUp' , console.log('up'));
};

MatrixModel.prototype.calcDownAction = function () {
    this.pubSub.publish('moveDown' , console.log('down'));
};

MatrixModel.prototype.calcLeftAction = function () {
    this.pubSub.publish('moveLeft' , console.log('left'));
};

MatrixModel.prototype.calcRightAction = function () {
    this.pubSub.publish('moveRight' , console.log('right'));
};
