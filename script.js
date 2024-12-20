let countdown = 10;
const timerElement = document.getElementById('timer');

const interval = setInterval(() => {
    if (countdown <= 0) {
        clearInterval(interval);
        timerElement.textContent = 'Time\'s up!';
    } else {
        timerElement.textContent = countdown;
        countdown--;
    }
}, 1000);
