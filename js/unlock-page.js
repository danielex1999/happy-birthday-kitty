const intervalo = setInterval(actualizar, 1000);

function obtenerCumple() {
    return new Date(2026, 1, 27, 0, 0, 0);
    // return new Date(2026, 1, 23, 20, 14, 0);
}

function redirigir() {
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 2000);
}

function actualizar() {
    const ahora = new Date();

    const ahoraPeru = new Date(
        ahora.toLocaleString("en-US", { timeZone: "America/Lima" })
    );

    const cumple = obtenerCumple();
    const diff = cumple - ahoraPeru;

    if (diff <= 0) {
        clearInterval(intervalo);
        redirigir();
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = String(dias).padStart(2, '0');
    document.getElementById("hours").innerText = String(horas).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutos).padStart(2, '0');
    document.getElementById("seconds").innerText = String(segundos).padStart(2, '0');
}

actualizar();