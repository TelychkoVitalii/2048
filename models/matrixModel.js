function MatrixModel() {
    this.staticDigit = 2;
    this.randomGridIteration = Math.floor(Math.random() * 4);
    this.attributes = {
        size: { width: 4, height: 4 },
        grid:
        // JSON.parse(localStorage.getItem('matrix')) ||
        [
            ['', '', 2, 4],
            ['', '', 4, 2],
            ['', '', 2, 4],
            ['', '', 4, 2]
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
    var matrix = this.attributes.grid, lastArray = this.attributes.grid[3],
        randomNumbers = Math.random() < 0.6 ? 2 : 4,
        arr = [].concat.apply([], matrix);
    if(arr.includes('')) {
        // arr[Math.floor(Math.random() * arr.length)] = randomNumbers;
    }
    // for(var i = 0; i < arr.length; i += 1) {
    //     if(typeof arr[i] !== 'number') {
    //         arr[i] = randomNumbers;
    //         // console.log(a);
    //     }
    // }

    // arr[Math.floor(Math.random() * arr.length)] = randomNumbers;
    console.log(arr);

    // console.log(matrix);
    // matrix[this.randomGridIteration][this.randomGridIteration] = randomNumbers;
    // console.log(a);
    // this.attributes.grid[this.randomGridIteration][this.randomGridIteration] = this.staticDigit;
    // this.attributes.grid[this.randomGridIteration][this.randomGridIteration + 1] = randomNumbers;
    // if (lastArray.length === 5) {
    //     lastArray.pop();
    //     this.attributes.grid[this.randomGridIteration][this.randomGridIteration - 2] = randomNumbers;
    // }
};

MatrixModel.prototype.transformToColumn = function (matrix, columns, matrixLength) {
    var i, j;
    for (i = 0; i < matrixLength; i += 1) {
        for(j = 0; j < 4; j += 1) {
            columns[j].push(matrix[i][j]);
        }
    }
};

MatrixModel.prototype.transformToMatrix = function (matrix, columns, columnsLength) {
    var i, j;
    for (i = 0; i < columnsLength; i += 1) {
        for(j = 0; j < 4; j += 1) {
            matrix[j].push(columns[i][j]);
            matrix[j].shift();
        }
    }
};

MatrixModel.prototype.moveElements = function (elements, i, innerLength, key) {
    var k;
    for(k = 0; k < innerLength; k += 1) {
        if (typeof elements[i][k] !== 'number') {
            (key === 'up' || key === 'left') ?
                elements[i].push(elements[i].splice(elements[i].indexOf(elements[i][k]), 1)[0]):
                elements[i].unshift(elements[i].splice(k, 1)[0]);
        }
    }
};

MatrixModel.prototype.calculateValue = function (values, i, innerLength, key) {
    var j;
    for(j = 0; j < innerLength; j += 1) {
        if(values[i][j] === values[i][j + 1] && (typeof values[i][j] && values[i][j + 1]) !== 'string') {
            values[i][j] *= 2;
            if(values[i][j] === 0) values[i][j] = '';
            values[i].splice(j + 1, 1);
            if(key === 'down' || key === 'right') values[i].unshift('');
            if(isNaN(values[i][j])) values[i][j] = '';
        }
    }
};

MatrixModel.prototype.displayActionResult = function (key) {
    var i, matrix = this.attributes.grid,
        matrixLength = matrix.length,
        columns = [[], [], [], []],
        columnsLength = columns.length;

    if(key === 'up' || key === 'down') {
        this.transformToColumn(matrix, columns, matrixLength);

        for(i = 0; i < columnsLength; i += 1) {
            this.moveElements(columns, i, columns[i].length, key);
            this.calculateValue(columns, i, columns[i].length, key);
        }

        this.transformToMatrix(matrix, columns, columnsLength);
    } else {
        for(i = 0; i < matrixLength; i += 1) {
            this.moveElements(matrix, i, matrix[i].length, key);
            this.calculateValue(matrix, i, matrix[i].length, key);
        }
    }

    this.publish('changeData');
    // localStorage.setItem('matrix', JSON.stringify(matrix));
    return matrix;
};