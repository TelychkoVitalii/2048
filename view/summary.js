function ShowSummary() {
    this.summaryModel = new SummaryModel(2, 8);
    this.template = document.getElementById('summaryTemplate').innerHTML;
}

ShowSummary.prototype.render = function () {
    var div = document.createElement('div'),
        attributes = this.summaryModel.attributes,
        tpl = this.template;
    div.setAttribute('id', 'summaryText');
    for(var i in attributes) {
        if(attributes.hasOwnProperty(i)) {
            tpl = replaceFn(tpl, '{{'+ i +'}}', attributes[i]);
        }
    }
    div.innerHTML = tpl;
    return div;
};