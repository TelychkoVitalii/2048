function ShowMatrix() {
    this.kbdEvents = new KeyboardEvents();
    this.matrixModel = new MatrixModel();
    this.template = document.getElementById('matrixTemplate').innerHTML;
    this.className = 'parentBlock';
}

ShowMatrix.prototype = Object.create(BaseView.prototype);
ShowMatrix.prototype.constructor = ShowMatrix;

ShowMatrix.prototype.render = function () {
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

ShowMatrix.prototype.aftRender = function () {
    this.kbdEvents.eventsHandler();
};
