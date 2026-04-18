function createSpace() {
    const starContainer  = document.getElementById('starsContainer');
    const asteroidBelt   = document.getElementById('asteroid-belt');
    const spaceDust      = document.getElementById('space-dust');
    const planetLayer    = document.getElementById('planet-layer');

    if (!starContainer || !asteroidBelt || !spaceDust || !planetLayer) return;

    starContainer.innerHTML = '';
    asteroidBelt.innerHTML  = '';
    spaceDust.innerHTML     = '';
    planetLayer.innerHTML   = '';

    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width  = size;
        star.style.height = size;
        star.style.left   = Math.random() * 100 + '%';
        star.style.top    = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        starContainer.appendChild(star);
    }

    for (let i = 0; i < 80; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust-particle';
        dust.style.left           = Math.random() * 100 + '%';
        dust.style.top            = Math.random() * 100 + '%';
        dust.style.animationDelay = Math.random() * 5 + 's';
        spaceDust.appendChild(dust);
    }

    const planetColors = ['#ffb7ce', '#fff44f', '#a5d4ff', '#ff758c'];
    for (let i = 0; i < 4; i++) {
        const p = document.createElement('div');
        p.className = 'bg-planet';
        const size = Math.random() * 100 + 50 + 'px';
        p.style.width            = size;
        p.style.height           = size;
        p.style.left             = Math.random() * 100 + 'vw';
        p.style.top              = Math.random() * 100 + 'vh';
        p.style.background       = `radial-gradient(circle at 30% 30%, ${planetColors[i]}, transparent)`;
        p.style.animationDuration = Math.random() * 50 + 40 + 's';
        planetLayer.appendChild(p);
    }

    for (let i = 0; i < 12; i++) {
        const ast = document.createElement('div');
        ast.className = 'asteroid';
        const size = Math.random() * 30 + 10 + 'px';
        ast.style.width            = size;
        ast.style.height           = size;
        ast.style.left             = Math.random() * 100 + 'vw';
        ast.style.top              = Math.random() * 100 + 'vh';
        ast.style.animationDuration = Math.random() * 30 + 20 + 's';
        asteroidBelt.appendChild(ast);
    }

    setInterval(() => {
        const s = document.createElement('div');
        s.className  = 'shooting-star';
        s.style.top  = Math.random() * 60 + '%';
        s.style.left = '-150px';
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1600);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', createSpace);
