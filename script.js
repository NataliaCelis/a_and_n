// 1. GENERATE BACKGROUND STARS
const starContainer = document.getElementById('starsContainer');
for (let i = 0; i < 250; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
    starContainer.appendChild(star);
}

// 2. LEMON & STAR CURSOR TRAIL
document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    particle.innerHTML = Math.random() > 0.5 ? '🍋' : '✨';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
});

// 3. COUNT-UP TIMER (Nov 6, 2025 @ 6pm)
const metDate = new Date("November 6, 2025 18:00:00").getTime();
function updateCounter() {
    const now = new Date().getTime();
    const d = now - metDate;
    document.getElementById('days').innerText = Math.floor(d / 86400000);
    document.getElementById('hours').innerText = Math.floor((d % 86400000) / 3600000);
    document.getElementById('mins').innerText = Math.floor((d % 3600000) / 60000);
    document.getElementById('secs').innerText = Math.floor((d % 60000) / 1000);
}
setInterval(updateCounter, 1000);
updateCounter();

// 4. RUNAWAY NO BUTTON
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 5. SURPRISE PHOTO RAIN
function startPhotoRain() {
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            // REPLACE THIS URL with Arsh's photo
            img.src = "https://via.placeholder.com/150x150/ffb7ce/000?text=UGLY+ARSH"; 
            img.className = 'rain-item';
            img.style.left = Math.random() * 100 + 'vw';
            img.style.width = (Math.random() * 100 + 100) + 'px';
            img.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(img);
            setTimeout(() => img.remove(), 4000);
        }, i * 150);
    }
}

function sayYes() {
    document.getElementById('successOverlay').style.display = 'flex';
    confetti({ particleCount: 300, spread: 180, colors: ['#ffb7ce', '#fff44f', '#ffffff'] });
}
