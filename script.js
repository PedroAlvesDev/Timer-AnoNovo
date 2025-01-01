const timerElement = document.getElementById('timer');

const nextYear = new Date().getFullYear() + 1;
const newYearDate = new Date(`January 01, ${nextYear}, 00:00:00`);

function updateTimer() {
    const now = new Date();
    const timeRemaining = newYearDate - now;

    if(timeRemaining <= 0) {
        timerElement.textContent = "Feliz Ano Novo!";
        clearInterval(timerInterval);
        return;
    };

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

const timerInterval = setInterval(updateTimer, 1000);

uodateTimer();


