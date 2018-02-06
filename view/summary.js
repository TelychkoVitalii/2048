function ShowSummary() {
    var summaryModel = new SummaryModel(2, 0);
    this.showTotalScore = function () {
        var score = document.getElementById('scoreResult');
        score.innerHTML = summaryModel.total;
    };
    this.showBestScore = function () {
        var best = document.getElementById('bestResult');
        best.innerHTML = summaryModel.best;
    };
    this.render = function () {
        this.showTotalScore();
        this.showBestScore();
    }
}