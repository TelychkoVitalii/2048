function AppView() {
    var showMatrix = new ShowMatrix();
    var showSummary = new ShowSummary();

    this.render = function (selector) {
        var element = document.getElementById(selector);
        element.appendChild(showSummary.render());
        element.appendChild(showMatrix.render());
    };
}

var appView = new AppView();
appView.render('root');
