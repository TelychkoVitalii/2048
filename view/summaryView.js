function ShowSummary() {
    this.summaryModel = new SummaryModel(2, 8);
    this.template = document.getElementById('summaryTemplate').innerHTML;
    this.className = 'summary';
}

ShowSummary.prototype = Object.create(BaseView.prototype);
ShowSummary.prototype.constructor = ShowSummary;

ShowSummary.prototype.render = function () {
    return templateStr(this.template, this.summaryModel.attributes);
};