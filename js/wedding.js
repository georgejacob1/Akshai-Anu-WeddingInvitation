document.addEventListener("DOMContentLoaded", function() {
    // Target date: August 24, 2026 at 11:00 AM
    const targetDate = new Date("August 24, 2026 11:00:00").getTime();

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secsEl = document.getElementById("secs");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            // Event has passed
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minsEl.innerText = "00";
            secsEl.innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days.toString().padStart(2, "0");
        hoursEl.innerText = hours.toString().padStart(2, "0");
        minsEl.innerText = minutes.toString().padStart(2, "0");
        secsEl.innerText = seconds.toString().padStart(2, "0");
    }

    // Initial call
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
});
