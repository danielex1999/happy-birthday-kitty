window.addEventListener("load", () => {
    setTimeout(() => {
        window.location.href = "pages/loader.html";
    }, 24400);
});

const audio = document.getElementById("bgMusic");

function startMusic() {
    audio.volume = 0.4;
    audio.play();
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
}
document.addEventListener("touchstart", startMusic);
document.addEventListener("click", startMusic);