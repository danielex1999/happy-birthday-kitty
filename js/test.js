const intervalo = setInterval(actualizar, 1000);

function obtenerCumple() {
    // 👉 FECHA FIJA (importante para que después no se reinicie)
    // return new Date(2026, 1, 27, 20, 15, 0);
    return new Date(2026, 1, 23, 21, 46, 0);
}

function mostrarCumple() {
    document.getElementById("tiempo-de-espera").style.display = "none";
    document.getElementById("cumple").style.display = "block";
    document.getElementById("cake-wait").style.display = "none";
    document.getElementById("cake-birth").style.display = "block";
    document.getElementById("cake-birth").style.maxWidth = "100%";
    document.getElementsByClassName("contador")[0].style.padding = "0px";
    document.getElementsByClassName("contador")[0].style.paddingBottom = "20px";
    document.getElementById("fuegos-button").innerText = "Feliz cumpleaños, Micaela 🎂💖";
    
}

function actualizar() {
    const ahora = new Date();

    const ahoraPeru = new Date(
        ahora.toLocaleString("en-US", { timeZone: "America/Lima" })
    );

    const cumple = obtenerCumple();
    const diff = cumple - ahoraPeru;

    // 🔥 SI YA PASÓ
    if (diff <= 0) {
        clearInterval(intervalo);
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

// 🔥 IMPORTANTE: ejecutar al cargar
actualizar();