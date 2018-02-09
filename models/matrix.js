function MatrixModel() {
    this.attributes = {
        size: { width: 4, height: 4 },
        grid: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 2, 0],
            [0, 0, 0, 0]
        ]
    };
}

MatrixModel.prototype = {
    calculateUpAction: function () {
        console.log('up');
    },
    calculateDownAction: function () {
        console.log('down');
    },
    calculateLeftAction: function () {
        console.log('left');
    },
    calculateRightAction: function () {
        console.log('right');
    }
};