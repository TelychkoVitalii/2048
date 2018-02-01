var view = {
    showInitialBlocks: function (result) {
        var cellCollection = [].slice.call(document.getElementsByTagName('TD')),
            initialValues = [2, 4],
            a = Math.floor(Math.random() * initialValues.length) + 1,
            randomValues = initialValues[Math.floor(Math.random() * initialValues.length)];
        cellCollection.forEach(function (item) { item.innerHTML = null });
        cellCollection[result].textContent = 2;
        cellCollection[a].textContent = 4;
    }
};

var model = {
    initialBlocks: function () {
        var randomResult = Math.floor(Math.random() * 16);
        view.showInitialBlocks(randomResult);
    }
};

var controllers = {
    startNewGame: function () {
        model.initialBlocks();
    },
    moveUp: function () {

    },
    moveDown: function () {

    },
    moveRight: function () {

    },
    moveLeft: function () {

    }
};

var newGameButton = document.getElementById('newGame');
newGameButton.addEventListener('click', controllers.startNewGame);
window.onload = controllers.startNewGame;

