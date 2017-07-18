var btn = document.querySelector('.button');
var res = document.querySelector('.result')

btn.addEventListener('click', function () {
    setTimeout(function () {
        var options = ['yes', 'no'];
        var choice = Math.floor(Math.random() * 2);
        res.textContent = options[choice];
    }, 300);

    setTimeout(function () {
        res.textContent = '';
    }, 1700);

});
