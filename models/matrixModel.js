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
    this.init = function () {
        var randomGridIteration = Math.floor(Math.random() * 4), i;
        // for(i = 0; i < this.startQuantity; i += 1) {
        //     this.attributes.grid[randomGridIteration][randomGridIteration] = Math.random() < 0.6 ? 2 : 4;
        //     if(typeof this.attributes.grid[randomGridIteration][randomGridIteration] !== 'number') {
        //         this.attributes.grid[randomGridIteration][randomGridIteration] = Math.random() < 0.6 ? 2 : 4;
        //     }
        //     console.log(this.attributes.grid);
        // }
    };

    this.init();

    var instance = this;
    MatrixModel = function () {
        return instance;
    };
}

MatrixModel.prototype = new PubSub();
MatrixModel.prototype.constructor = MatrixModel;

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