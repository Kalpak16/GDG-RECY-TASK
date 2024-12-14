// Countdown Timer Logic
function updateCountdown() {
    const newYear = new Date("January 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYear - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        document.getElementById("timer").innerText = "🎆 Happy New Year 2025! 🎆";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Start the countdown timer
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Preview Button Logic
    const previewBtn = document.getElementById("preview-btn");
    previewBtn.addEventListener("click", () => {
        alert("🎉 Happy New Year 2025! 🎉");
    });

    // Surprise Button Logic
    const surpriseButton = document.getElementById("surprise-btn");
    const surpriseMessage = document.getElementById("surprise-message");

    const surprises = [
        "🌈 Big opportunities are heading your way in 2025!",
        "💎 Shine bright like never before—your best days are ahead!",
        "🚀 Dreams turn into plans, and plans turn into achievements—2025 is your year!",
        "✨ Every challenge is a stepping stone to greatness—keep going!",
        "🌟 Believe in yourself, and 2025 will reward your confidence!",
        "🔥 Fuel your passion—this is the year you redefine your limits!",
        "🌸 Spread positivity and see how the universe surprises you in 2025!",
        "🎯 Set your goals high, and watch 2025 bring them within reach!",
        "🎉 Celebrate the small wins—they'll lead to your biggest success yet!",
        "💡 The ideas you spark in 2025 could change the world!"
      ];
      

    surpriseButton.addEventListener("click", () => {
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        surpriseMessage.innerText = randomSurprise;
        surpriseMessage.style.color = "green";
        surpriseMessage.style.fontWeight = "bold";
    });
});
