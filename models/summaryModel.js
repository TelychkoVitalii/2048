function SummaryModel() {
    BaseModel.call(this);
    this.attributes = {
        total: 0,
        best: 0
    };

    var instance = this;
    SummaryModel = function () {
        return instance;
    };
}

SummaryModel.prototype = new BaseModel();
SummaryModel.prototype.constructor = SummaryModel;

SummaryModel.prototype.countTotalScore = function (total) {
    this.attributes.total = total;
    this.publish('changeData');
};

SummaryModel.prototype.countBestScore = function () {

};
