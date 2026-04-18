document.addEventListener('DOMContentLoaded', () => {
    // Counter — same reference date as all letters
    const metDate = new Date("November 6, 2025 18:00:00").getTime();

    function tick() {
        const d = Date.now() - metDate;
        document.getElementById('days').innerText  = Math.floor(d / 86400000);
        document.getElementById('hours').innerText = Math.floor((d % 86400000) / 3600000);
        document.getElementById('mins').innerText  = Math.floor((d % 3600000) / 60000);
        document.getElementById('secs').innerText  = Math.floor((d % 60000) / 1000);
    }
    tick();
    setInterval(tick, 1000);

    // Render letter carousel from letters.js registry
    const carousel = document.getElementById('letterCarousel');
    if (carousel && typeof letters !== 'undefined') {
        letters.forEach(letter => {
            const card = document.createElement('div');
            card.className = 'letter-card';
            card.innerHTML = `
                <div class="letter-card-icon">${letter.emoji}</div>
                <p class="letter-card-title">${letter.title}</p>
                <p class="letter-card-from">from ${letter.from}</p>
            `;
            card.addEventListener('click', () => {
                if (letter.from === 'arsh') {
                    triggerLilyBloom(letter.file);
                } else {
                    window.location.href = letter.file;
                }
            });
            carousel.appendChild(card);
        });
    }

    // Lily bloom transition for Arsh's letters
    function triggerLilyBloom(url) {
        const overlay = document.getElementById('lilyOverlay');
        overlay.classList.add('blooming');
        setTimeout(() => { window.location.href = url; }, 1300);
    }
});
