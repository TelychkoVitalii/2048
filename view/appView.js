function AppView() {
    var matrixView = new ShowMatrix();
    var summaryView = new ShowSummary();

    this.render = function (selector) {
        var element = document.getElementById(selector);
        summaryView.show(element);
        matrixView.show(element);
    }
}

var appView = new AppView();
appView.render('root');