function SummaryModel(total, best) {
    this.attributes = {
        total: total,
        best: best
    };
    BaseModel.call(this);
}

SummaryModel.prototype = new BaseModel();
SummaryModel.prototype.constructor = SummaryModel;

SummaryModel.prototype.countTotalScore = function (total) {
    this.attributes.total = total;
    this.publish('changeData');
};

SummaryModel.prototype.countBestScore = function () {

};
