const btn = document.querySelector('.button-check');
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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
    }).catch(function(error) {
      console.log('Service worker registration failed:', error);
    });
  } else {
    console.log('Service workers are not supported.');
  }