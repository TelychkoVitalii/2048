function MatrixModel() {
    this.startQuantity = 2;
    this.attributes = {
        size: { width: 4, height: 4 },
        grid: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
        ]
    };

    var instance = this;
    MatrixModel = function () {
        return instance;
    };
}

MatrixModel.prototype = new PubSub();
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.showRandomNumbers = function () {
    var randomGridIteration = Math.floor(Math.random() * 4), i,
        randomData = this.attributes.grid[randomGridIteration][randomGridIteration];
    for(i = 0; i < this.startQuantity; i += 1) {
        this.attributes.grid[randomGridIteration][randomGridIteration] = Math.random() < 0.6 ? 2 : 4;
    }
    this.publish('changeData');
};

MatrixModel.prototype.calcUpAction = function () {
    this.publish('changeData');
};

MatrixModel.prototype.calcDownAction = function () {
    this.publish('changeData');
};

MatrixModel.prototype.calcLeftAction = function () {
    this.publish('changeData');
};

MatrixModel.prototype.calcRightAction = function () {
    this.publish('changeData');
};