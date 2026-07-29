document.addEventListener("DOMContentLoaded", function () {
    // -------------------------------------------------------------
    // 1. Splash Screen Door Opening Sequence (3 Seconds Display)
    // -------------------------------------------------------------
    const splashScreen = document.getElementById("splash-screen");

    if (splashScreen) {
        document.body.classList.add("splash-active");

        // Wait 3 seconds before opening the door split
        setTimeout(function () {
            splashScreen.classList.add("open");
            document.body.classList.add("splash-opened");
            document.body.classList.remove("splash-active");

            // Hide overlay completely after door transition (1.5s) completes
            setTimeout(function () {
                splashScreen.classList.add("finished");
            }, 1500);
        }, 1000);
    }

    // -------------------------------------------------------------
    // 2. Scroll & Reveal Animations for Home Screen Elements
    // -------------------------------------------------------------
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        revealElements.forEach(function (el) {
            el.classList.add("is-visible");
        });
    }

    // -------------------------------------------------------------
    // 3. Countdown Timer Logic
    // -------------------------------------------------------------
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
            if (daysEl) daysEl.innerText = "00";
            if (hoursEl) hoursEl.innerText = "00";
            if (minsEl) minsEl.innerText = "00";
            if (secsEl) secsEl.innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.innerText = days.toString().padStart(2, "0");
        if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, "0");
        if (minsEl) minsEl.innerText = minutes.toString().padStart(2, "0");
        if (secsEl) secsEl.innerText = seconds.toString().padStart(2, "0");
    }

    // Initial call
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
});

