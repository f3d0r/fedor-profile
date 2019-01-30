var birthday = new Date(1997, 10, 12, 6, 15, 0, 0);
var coffeeDate = new Date(2018, 1, 1, 7, 0, 0, 0);

$(document).ready(function () {
    window.location.replace("https://f3d0r.com/");
    // setInterval(calculateDecimalYear, 75);
});

function calculateDecimalYear() {
    var now = Date.now();
    var decimalYears = (now - birthday) / 31556952000;
    $('#years_old').html(decimalYears.toFixed(5));

    var coffees = 1100 + (3 * (now - coffeeDate) / 88643123.59550563);
    $('#coffee_num').html(Math.ceil(coffees.toFixed(3)));
}