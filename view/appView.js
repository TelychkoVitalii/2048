function AppView() {
    var showMatrix = new ShowMatrix();
    var showSummary = new ShowSummary();

    this.render = function () {
        showSummary.render();
        showMatrix.render();
    };
}

var appView = new AppView();
appView.render();
