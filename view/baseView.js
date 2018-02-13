function BaseView() {
    this.rootElement = document.createElement('div');
}

BaseView.prototype.show = function (element) {
    this.beforeRender();

    this.rootElement.innerHTML = this.render();
    this.rootElement.classList.add(this.className);

    element.appendChild(this.rootElement);

    this.aftRender();
};

BaseView.prototype.beforeUpdate = function () {};

BaseView.prototype.reRender = function () {
    this.beforeUpdate();
    this.rootElement.innerHTML = this.render();
};

BaseView.prototype.aftRender = function () {};
BaseView.prototype.beforeRender = function () {};
