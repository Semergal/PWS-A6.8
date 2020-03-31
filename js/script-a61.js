var value = 0;

function changeProgressBar(count) {

    if (value == 100) {
        value = 0;
    }

    value += count;

    if (value > 100) {
        value = 100;
    }

    $("#progress-bar").width(`${value}%`);
    $("#progress-bar").text(`${value}%`);

}

function init() {

    changeProgressBar(value)

    $("#btn-1").click(function () {
        changeProgressBar(1);
    });

    $("#btn-3").click(function () {
        changeProgressBar(3);
    });

    $("#btn-7").click(function () {
        changeProgressBar(7);
    });

}

$(document).ready(init);