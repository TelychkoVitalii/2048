// Matrix View
function Matrix() {
    var showMatrix = new ShowMatrix();
    this.render = function () {
        return showMatrix;
    }
}

var matrix = new Matrix();


// Summary View
function Summary() {
    var showSummary = new ShowSummary();
    this.render = function () {
        return showSummary;
    }
}

var summary = new Summary();

// App View
function AppView() {
    this.render = function () {
        summary;
        matrix;
    };
}

var appView = new AppView();
appView.render();
