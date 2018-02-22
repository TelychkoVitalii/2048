function BaseModel() {
}

BaseModel.prototype = new PubSub();
BaseModel.prototype.constructor = BaseModel;