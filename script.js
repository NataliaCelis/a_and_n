// 1. Count-up Timer (Met Nov 6th, 2025 at 6:00 PM)
const startDate = new Date("November 6, 2025 18:00:00").getTime();

function updateCounter() {
    const now = new Date().getTime();
    const diff = now - startDate;

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}
setInterval(updateCounter, 1000);

// 2. Star Cursor Effect
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.left = e.clientX + 'px';
    star.style.top = e.clientY + 'px';
    star.style.pointerEvents = 'none';
    star.style.zIndex = '999';
    star.style.fontSize = Math.random() * 15 + 10 + 'px';
    document.body.appendChild(star);

    star.animate([
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${(Math.random()-0.5)*100}px, 100px) rotate(360deg)`, opacity: 0 }
    ], { duration: 1500 });

    setTimeout(() => star.remove(), 1500);
});

// 3. RSVP Actions
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successOverlay = document.getElementById('successOverlay');

yesBtn.addEventListener('click', () => {
    successOverlay.classList.remove('hidden');
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
});

noBtn.addEventListener('click', () => {
    document.getElementById('noResponse').classList.remove('hidden');
    noBtn.style.display = 'none';
});

function closeOverlay() { successOverlay.classList.add('hidden'); }

// 4. Scroll Fade-In
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
