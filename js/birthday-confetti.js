let miConfetti;

window.addEventListener("load", () => {
    const canvas = document.getElementById("fuegosCanvas");

    // crear instancia ligada al canvas
    miConfetti = confetti.create(canvas, { resize: true });
});

function lanzarFuegos() {

    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;

    var defaults = {
        startVelocity: 20,
        spread: 360,
        ticks: 100,
        zIndex: 0,
        colors: ['#ff69b4', '#ffd700', '#ffffff']
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {

        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);

            // explosión final 🎆
            miConfetti({
                particleCount: 200,
                spread: 120,
                origin: { x: 0.5, y: 0.5 }
            });

            return;
        }

        var particleCount = 50 * (timeLeft / duration);

        // izquierda
        miConfetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.1, 0.3),
                y: Math.random() * 0.5
            }
        });

        // derecha
        miConfetti({
            ...defaults,
            particleCount,
            origin: {
                x: randomInRange(0.7, 0.9),
                y: Math.random() * 0.5
            }
        });

    }, 250);
}