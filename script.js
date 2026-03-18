// 1. STAR & ASTEROID GENERATOR
const starContainer = document.getElementById('starsContainer');
const asteroidBelt = document.getElementById('asteroid-belt');

function createSpace() {
    // 200 Twinkling Stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size; star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        starContainer.appendChild(star);
    }

    // 10 Random Asteroids
    for (let i = 0; i < 10; i++) {
        const ast = document.createElement('div');
        ast.className = 'asteroid';
        const size = Math.random() * 40 + 20 + 'px';
        ast.style.width = size; ast.style.height = size;
        ast.style.left = Math.random() * 100 + 'vw';
        ast.style.top = Math.random() * 100 + 'vh';
        ast.style.opacity = Math.random() * 0.5;
        ast.style.animationDuration = Math.random() * 60 + 30 + 's';
        asteroidBelt.appendChild(ast);
    }

    // Frequent Shooting Stars
    setInterval(() => {
        const s = document.createElement('div');
        s.className = 'shooting-star';
        s.style.top = Math.random() * 50 + '%';
        s.style.left = '-10%';
        s.style.animationDuration = '2s';
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 2000);
    }, 4000);
}
createSpace();

// 2. GRATITUDE JAR
const boyfriendReasons = [

"The way you always make sure I’m on the inside of the sidewalk",
"How our dates somehow last forever but still feel too short",
"You always plan elaborate dates <3",
"The way you play guitar and piano",
"You remembering the tiniest details about me",
"How you match my energy",
"Your curls always look perfect",
"How you’re always down for whatever",
"The speakeasy and how thoughtful that whole night was",
"That improv experience that made no sense but was still fun because it was with you",
"How you make even the most random moments feel important",
"Doing pottery together and figuring it out as we go",
"All the food spots you’ve shown me that I never would’ve found on my own",
"How you plan things so thoughtfully",
"How you make me feel taken care of",
"The way you notice little things about me that I don’t even say out loud",
"How easy it is to be fully myself around you",
"The way you make everything feel lighter when I’m stressed",
"How lucky I feel that we met when we did",

---

if you want I can make this into like a cute note layout or reorder it so it builds emotionally at the end 🥹

];

function pullGratitude() {
    const note = document.getElementById('gratitude-note');
    note.innerText = boyfriendReasons[Math.floor(Math.random() * boyfriendReasons.length)];
    note.classList.add('show');
    confetti({ particleCount: 30, spread: 50, colors: ['#ffb7ce', '#fff44f'] });
}

// 3. RUNAWAY NO BUTTON (Mobile Friendly)
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Stop the tap
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.width = '120px'; // Keep it smaller when moving
    noBtn.style.zIndex = '1000';
});

// 4. PHOTO RAIN (Using Arsh's Pic)
function startPhotoRain() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = "lol.heic"; // Name your embarrassing pic this!
            img.className = 'rain-item';
            img.style.left = Math.random() * 90 + 'vw';
            img.style.width = (Math.random() * 80 + 80) + 'px';
            img.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(img);
            setTimeout(() => img.remove(), 4000);
        }, i * 200);
    }
}

// 5. COUNT-UP TIMER (Nov 6, 2025 @ 6pm)
const metDate = new Date("November 6, 2025 18:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const d = now - metDate;
    document.getElementById('days').innerText = Math.floor(d / 86400000);
    document.getElementById('hours').innerText = Math.floor((d % 86400000) / 3600000);
    document.getElementById('mins').innerText = Math.floor((d % 3600000) / 60000);
    document.getElementById('secs').innerText = Math.floor((d % 60000) / 1000);
}, 1000);

function sayYes() {
    document.getElementById('successOverlay').style.display = 'flex';
    confetti({ particleCount: 300, spread: 180 });
}
