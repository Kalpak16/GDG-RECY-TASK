// Countdown Timer Logic
function updateCountdown() {
    const newYearDate = new Date("January 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = newYearDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("timer").innerText = 
            `${days} : ${hours} : ${minutes} : ${seconds}`;
    } else {
        document.getElementById("timer").innerText = "00 : 00 : 00 : 00";
    }
}

// Update Countdown Every Second
setInterval(updateCountdown, 1000);
updateCountdown();

// Preview Button Functionality
document.getElementById("preview-btn").addEventListener("click", () => {
    const now = new Date();
    const isNewYear = now.getHours() === 0 && now.getMinutes() === 0;
    document.getElementById("message").innerText = 
        isNewYear ? "🎉 Happy New Year! 🎉" : "Happy New Year!";
});
