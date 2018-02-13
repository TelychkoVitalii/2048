function MatrixView() {
    this.matrixModel = new MatrixModel();
    this.keaboardController = new KeyboardController();
    this.template = document.getElementById('matrixTemplate').innerHTML;
    this.className = 'table';
    BaseView.call(this);
}

MatrixView.prototype = Object.create(BaseView.prototype);
MatrixView.prototype.constructor = MatrixView;

MatrixView.prototype.beforeRender = function () {
    this.matrixModel.showRandomNumbers();
    this.matrixModel.subscribe('changeData', this.reRender.bind(this));
};

MatrixView.prototype.render = function () {
    var i, j, attributes = this.matrixModel.attributes, str = '';

    for(i = 0; i < attributes.size.width; i += 1) {
        str += '<div class="row">';
        for (j = 0; j < attributes.size.height; j += 1) {
            str += '<div class="cell">' + attributes.grid[i][j] + '</div>';
        }
        str += '</div>';
    }
    return this.template.replace('{{matrix}}', str);
};

MatrixView.prototype.aftRender = function () {
    document.onkeydown = this.keaboardController.eventHandler.bind(this.keaboardController);
};
