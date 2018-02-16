function MatrixModel() {
    this.staticDigit = 2;
    this.randomGridIteration = Math.floor(Math.random() * 4);
    this.attributes = {
        size: { width: 4, height: 4 },
        grid: [
            [4, 2, '', 2],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
        ]
    };

    var instance = this;
    MatrixModel = function () {
        return instance;
    };

    this.init();
}

MatrixModel.prototype = new PubSub();
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.init = function () {
    // var lastArray = this.attributes.grid[3],
    //     randomNumbers = Math.random() < 0.4 ? 2 : 4;
    // this.attributes.grid[this.randomGridIteration][this.randomGridIteration] = this.staticDigit;
    // this.attributes.grid[this.randomGridIteration][this.randomGridIteration + 1] = randomNumbers;
    // if(lastArray.length === 5) {
    //     lastArray.pop();
    //     this.attributes.grid[this.randomGridIteration][this.randomGridIteration - 2] = randomNumbers;
    // }
};

MatrixModel.prototype.moveElements = function (matrix) {
    var i, j, len = matrix.length, newArr = [];
    for(i = 0; i < len; i += 1) {
        for(j = 0; j < matrix[i].length; j += 1) {
            console.log(matrix[i][j]);
            if (matrix[i][j] === matrix[i][j + 1]) {
                matrix[i][j] = matrix[i][j] * 2;
                matrix[i][j] = '';
            }
        }
    }


    console.log(matrix);
    return matrix;
};
// matrix[i].splice(new_index, 0, matrix[i].splice(old_index, 1))
MatrixModel.prototype.calcUpAction = function () {
    this.publish('changeData');
};

MatrixModel.prototype.calcDownAction = function () {
    this.publish('changeData');
};

MatrixModel.prototype.calcLeftAction = function () {
    this.moveElements(this.attributes.grid);
    this.publish('changeData');
};

MatrixModel.prototype.calcRightAction = function () {
    this.publish('changeData');
};