function ShowMatrix() {
    var matrixModel = new MatrixModel();
    this.showGrid = function () {
        var i, root = document.getElementById('root'),
            columns = matrixModel.size.width,
            rows = matrixModel.size.height,
            arr = matrixModel.grid;
        root.classList.add('parentBlock');
        for(i = 0; i < columns; i += 1) {
            arr[i] = new Array(rows);
            var div = document.createElement('div');
            div.classList.add('cell');
            root.appendChild(div);
        }
    };
    this.render = function () {
        this.showGrid();
    }
}

