function obtenerCumple() {
    const ahora = new Date();

    const ahoraPeru = new Date(
        ahora.toLocaleString("en-US", { timeZone: "America/Lima" })
    );

    let anio = ahoraPeru.getFullYear();

    let cumple = new Date(anio, 1, 19, 20, 52, 0);

    if (cumple < ahoraPeru) {
        cumple = new Date(anio + 1, 1, 19, 20, 52, 0);
    }

    return cumple;
}

function mostrarCumple() {
    document.getElementById("contador").style.display = "none";
    document.getElementById("cumple").style.display = "block";
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

        // 🔥 Guardamos estado
        localStorage.setItem("cumpleActivo", "true");

        mostrarCumple();
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

// 🔥 Al cargar la página
if (localStorage.getItem("cumpleActivo") === "true") {
    mostrarCumple();
} else {
    var intervalo = setInterval(actualizar, 1000);
    actualizar();
}