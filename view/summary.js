function ShowSummary() {
    this.summaryModel = new SummaryModel(2, 8);
    this.template = document.getElementById('summaryTemplate').innerHTML;
}

ShowSummary.prototype.render = function () {
    var div = document.createElement('div');
    div.setAttribute('id', 'summaryText');
    div.innerHTML = templateStr(this.template, this.summaryModel.attributes);
    return div;
};