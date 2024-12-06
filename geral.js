document.addEventListener("DOMContentLoaded", function () {
    const startDate = new Date("2023-01-01T00:00:00"); // Substitua pela data desejada (ano-mês-diaT00:00:00)

    function updateTimer() {
        const now = new Date();
        const elapsedTime = now - startDate;

        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent = 
            `Tempo desde a data: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateTimer, 1000); // Atualiza o temporizador a cada segundo
    updateTimer(); // Inicializa o temporizador imediatamente
});

