function MatrixModel() {
    this.staticDigit = 2;
    this.randomGridIteration = Math.floor(Math.random() * 4);
    this.attributes = {
        size: { width: 4, height: 4 },
        grid:
        // JSON.parse(localStorage.getItem('matrix')) ||
        [
            ['', '', '', 2],
            ['', 2, '', 2],
            [4, 2, 2, 4],
            [4, '', 4, '']
        ]
    };

    var instance = this;
    MatrixModel = function () {
        return instance;
    };

    this.fillMatrixCell();
}

MatrixModel.prototype = new PubSub();
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.fillMatrixCell = function () {
    console.log(this.attributes.grid);
    // var lastArray = this.attributes.grid[3],
    //     randomNumbers = Math.random() < 0.4 ? 2 : 4;
    // this.attributes.grid[this.randomGridIteration][this.randomGridIteration] = this.staticDigit;
    // this.attributes.grid[this.randomGridIteration][this.randomGridIteration + 1] = randomNumbers;
    // if(lastArray.length === 5) {
    //     lastArray.pop();
    //     this.attributes.grid[this.randomGridIteration][this.randomGridIteration - 2] = randomNumbers;
    // }
};

MatrixModel.prototype.moveElements = function () {
    // var i, j, k, matrix = this.attributes.grid, len, innerLength;
    //
    // for(i = 0, len = matrix.length; i < len; i += 1) {
    //     for(k = 0, innerLength = matrix[i].length; k < innerLength; k += 1) {
    //         if (typeof matrix[i][k] !== 'number') {
    //             matrix[i].push(matrix[i].splice(matrix[i].indexOf(matrix[i][k]), 1)[0]);
    //         }
    //     }
    //     for(j = 0, innerLength = matrix[i].length; j < innerLength; j += 1) {
    //         if(matrix[i][j] === matrix[i][j + 1] && (typeof matrix[i][j] && matrix[i][j + 1]) !== 'string') {
    //             matrix[i][j] *= 2;
    //             matrix[i].splice(j + 1, 1);
    //             if(isNaN(matrix[i][j]) || matrix[i][j] === 0) matrix[i][j] = '';
    //         }
    //     }
    // }

    // localStorage.setItem('matrix', JSON.stringify(matrix));
    // console.log(matrix);
    // return matrix;
};

MatrixModel.prototype.calcUpAction = function () {
    this.publish('changeData');
};

MatrixModel.prototype.calcDownAction = function () {
    this.publish('changeData');
};

MatrixModel.prototype.calcLeftAction = function () {
    var i, j, k, matrix = this.attributes.grid, len, innerLength;

    for(i = 0, len = matrix.length; i < len; i += 1) {
        for(k = 0, innerLength = matrix[i].length; k < innerLength; k += 1) {
            if (typeof matrix[i][k] !== 'number') {
                matrix[i].push(matrix[i].splice(matrix[i].indexOf(matrix[i][k]), 1)[0]);
            }
        }
        for(j = 0, innerLength = matrix[i].length; j < innerLength; j += 1) {
            if(matrix[i][j] === matrix[i][j + 1] && (typeof matrix[i][j] && matrix[i][j + 1]) !== 'string') {
                matrix[i][j] *= 2;
                matrix[i].splice(j + 1, 1);
                if(isNaN(matrix[i][j]) || matrix[i][j] === 0) matrix[i][j] = '';
            }
        }
    }
    console.log(matrix);
    this.publish('changeData');
    return matrix;
};

MatrixModel.prototype.calcRightAction = function () {
    var i, j, k, matrix = this.attributes.grid, len, innerLength;

    for(i = 0, len = matrix.length; i < len; i += 1) {
        for (k = 0, len = matrix[i].length; k < len; k += 1) {
            if (typeof matrix[i][k] !== 'number') {
                matrix[i].unshift(matrix[i].splice(k, 1)[0]);
            }
        }

        for (innerLength = matrix[i].length - 1, j = innerLength; j >= 1; j -= 1) {
            if (matrix[i][j] === matrix[i][j + 1] && (typeof matrix[i][j] && matrix[i][j + 1]) !== 'string') {
                matrix[i][j] *= 2;
                if(matrix[i][j] === 0) {
                    matrix[i][j] = '';
                }
                matrix[i].splice(j + 1, 1);
                matrix[i].unshift('');
                if (isNaN(matrix[i][j]) || matrix[i][j] === 0) matrix[i][j] = '';
            }
        }
    }
    console.log(matrix);
    this.publish('changeData');
    return matrix;
};