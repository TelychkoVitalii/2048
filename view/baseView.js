function BaseView() {}

BaseView.prototype.show = function (element) {
    this.beforeRender();

    var div = document.createElement('div');

    div.innerHTML = this.render();
    div.classList.add(this.className);

    element.appendChild(div);

    this.aftRender();
};

BaseView.prototype.aftRender = function () {};

BaseView.prototype.beforeRender = function () {};