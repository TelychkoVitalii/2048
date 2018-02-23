function SummaryView() {
    this.summaryModel = new SummaryModel();
    this.template = document.getElementById('summaryTemplate').innerHTML;
    this.className = 'summary';
    BaseView.call(this);
}

SummaryView.prototype = Object.create(BaseView.prototype);
SummaryView.prototype.constructor = SummaryView;

SummaryView.prototype.beforeRender = function () {
    this.summaryModel.subscribe('changeData', this.reRender, this);
};

SummaryView.prototype.render = function () {
    return templateStr(this.template, this.summaryModel.attributes);
};

SummaryView.prototype.aftRender = function () {
    var scoreResult = document.getElementById('scoreResult'),
        addition = document.createElement('div');
    scoreResult.appendChild(addition);
    if(JSON.parse(localStorage.getItem('addition')) === (0 && null)) {
        return;
    } else {
        addition.innerHTML = '+ ' + JSON.parse(localStorage.getItem('addition'));
        addition.classList.add('scoreAddition');
    }
    setTimeout(function () {
        addition.style.display = 'none'
    }, 600)
};