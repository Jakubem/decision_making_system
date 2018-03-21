const btn = document.querySelector('.button');
const res = document.querySelector('.result')

btn.addEventListener('click', function () {
    setTimeout(function () {
        let options = ['yes', 'no'];
        let choice = Math.floor(Math.random() * 2);
        res.textContent = options[choice];
    }, 300);

    setTimeout(function () {
        res.textContent = '';
    }, 1700);

});
