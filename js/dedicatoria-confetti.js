window.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById("confetti-canvas");

  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true
  });

  var scalar = 2;

  // emojis
  var shapes = [
    confetti.shapeFromText({ text: '🦋', scalar }),
    confetti.shapeFromText({ text: '💌', scalar }),
    confetti.shapeFromText({ text: '🎂', scalar }),
    confetti.shapeFromText({ text: '💖', scalar })
  ];

  var defaults = {
    spread: 360,
    ticks: 120,          // duran más tiempo
    gravity: 0.2,        // caen lento
    decay: 0.97,         // se frenan lento
    startVelocity: 8,    // velocidad baja
    shapes: shapes,
    scalar
  };

  function shoot() {
    // lanza desde diferentes posiciones horizontales
    for (let i = 0; i < 5; i++) {
      myConfetti({
        ...defaults,
        particleCount: 10,
        origin: {
          x: Math.random(),   // 🔥 cubre todo el ancho
          y: Math.random() * 0.3 + 0.2 // parte media-alta
        }
      });
    }
  }

  function lanzarAnimacion() {
    shoot();
    setTimeout(shoot, 200);
    setTimeout(shoot, 400);
  }

  // 🔁 cada 5 segundos
  setInterval(lanzarAnimacion, 5000);

  // primer disparo
  lanzarAnimacion();

});