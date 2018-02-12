function SummaryView() {
    this.summaryModel = new SummaryModel(2, 8);
    this.template = document.getElementById('summaryTemplate').innerHTML;
    this.className = 'summary';
}

SummaryView.prototype = Object.create(BaseView.prototype);
SummaryView.prototype.constructor = SummaryView;

SummaryView.prototype.render = function () {
    return templateStr(this.template, this.summaryModel.attributes);
};