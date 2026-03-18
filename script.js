const starContainer = document.getElementById('starsContainer');
const asteroidBelt = document.getElementById('asteroid-belt');
const spaceDust = document.getElementById('space-dust');
const planetLayer = document.getElementById('planet-layer');

function createSpace() {
    // 1. Stars (Static twinkling)
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size; star.style.height = size;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        starContainer.appendChild(star);
    }

    // 2. Space Dust
    for (let i = 0; i < 80; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust-particle';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.top = Math.random() * 100 + '%';
        dust.style.animationDelay = Math.random() * 5 + 's';
        spaceDust.appendChild(dust);
    }

    // 3. Drifting Planets (The really cool stuff)
    const planetColors = ['#ffb7ce', '#fff44f', '#a5d4ff', '#ff758c'];
    for (let i = 0; i < 4; i++) {
        const p = document.createElement('div');
        p.className = 'bg-planet';
        const size = Math.random() * 100 + 50 + 'px';
        p.style.width = size; p.style.height = size;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = Math.random() * 100 + 'vh';
        p.style.background = `radial-gradient(circle at 30% 30%, ${planetColors[i]}, transparent)`;
        p.style.animationDuration = Math.random() * 50 + 40 + 's';
        planetLayer.appendChild(p);
    }

    // 4. Asteroids
    for (let i = 0; i < 12; i++) {
        const ast = document.createElement('div');
        ast.className = 'asteroid';
        const size = Math.random() * 30 + 10 + 'px';
        ast.style.width = size; ast.style.height = size;
        ast.style.left = Math.random() * 100 + 'vw';
        ast.style.top = Math.random() * 100 + 'vh';
        ast.style.animationDuration = Math.random() * 30 + 20 + 's';
        asteroidBelt.appendChild(ast);
    }

    // 5. High Frequency Shooting Stars
    setInterval(() => {
        const s = document.createElement('div');
        s.className = 'shooting-star';
        s.style.top = Math.random() * 60 + '%';
        s.style.left = '-150px';
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1600);
    }, 2000);
}
createSpace();

// RSVP Button 
const noBtn = document.getElementById('noBtn');
let moveCount = 0;

noBtn.addEventListener('click', () => {
    moveCount++;
    if (moveCount < 3) {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 100);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    } else {
        alert("ACCESS DENIED: Try again! 🍋");
        noBtn.innerText = "Okay fine, Yes ofc!";
        noBtn.style.position = "static";
        noBtn.className = "btn yes-btn";
        noBtn.onclick = sayYes;
    }
});

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

    "How lucky I feel that we met when we did"

    "The way you subconsciously reach for my hand",
    "The way you care about doing things right",
    "The way you smile when you’re proud of something"

];

function pullGratitude() {
    const note = document.getElementById('gratitude-note');
    note.innerText = boyfriendReasons[Math.floor(Math.random() * boyfriendReasons.length)];
    note.classList.add('show');
    confetti({ particleCount: 30, spread: 50, colors: ['#ffb7ce', '#fff44f'] });
}

// Timer Logic
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

function startPhotoRain() {
    // This triggers the confetti blast
    confetti({ 
        particleCount: 150, 
        spread: 70, 
        origin: { y: 0.6 },
        colors: ['#ffb7ce', '#fff44f'] 
    });

    // This makes the actual images fall
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const img = document.createElement('img');
            
            
            img.src = "pics/lol.png"; 
            
            img.className = 'rain-item';
            img.style.left = Math.random() * 90 + 'vw';
            img.style.width = (Math.random() * 80 + 80) + 'px';
            img.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            document.body.appendChild(img);
            
            // Removes the image after it falls so the site doesn't get laggy
            setTimeout(() => img.remove(), 4000);
        }, i * 200);
    }
}
