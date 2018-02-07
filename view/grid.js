function ShowMatrix() {
    this.matrixModel = new MatrixModel();
    this.template = document.getElementById('matrixTemplate').innerHTML;
}

ShowMatrix.prototype.render = function () {
    var i, j, parentDiv = document.createElement('div'),
        attributes = this.matrixModel.attributes,
        str = '',
        tpl = this.template;

    parentDiv.classList.add('parentBlock');

    for(i = 0; i < attributes.size.width; i += 1) {
        str += '<div class="row">';
        for (j = 0; j < attributes.size.height; j += 1) {
            str += '<div class="cell">' + attributes.grid[i][j] + '</div>';
        }
        str += '</div>';
    }

    tpl = replaceFn(tpl, '{{matrix}}', str);
    parentDiv.innerHTML = tpl;
    return parentDiv;
};