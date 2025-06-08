const iframe = document.getElementById("iframeContent");

function cargarWW1() {
    cargarIframe("../HTML/ww1menu.html");
}
function cargarWW2() {
    cargarIframe("../HTML/ww2menu.html");
}
function cargarcoldwar() {
    cargarIframe("../HTML/coldwarmenu.html");
}
function cargarmodern() {
    cargarIframe("../HTML/modernmenu.html");
}
function cargarukraine() {
    cargarIframe("../HTML/ukrainemenu.html");
}
function cargarGermany() {
    cargarIframe("../HTML/Germamenu.html");
}
function cargarRussia() {
    cargarIframe("../HTML/Russiamenu.html");
}
function cargarUSA() {
    cargarIframe("../HTML/USAmenu.html");
}
function cargarJapan() {      
    cargarIframe("../HTML/Japanmenu.html");
}
function cargarFrance() {
    cargarIframe("../HTML/Francemenu.html");
}
function cargarUK() {
    cargarIframe("../HTML/UKmenu.html");
}
function cargarIframe(url) {
    iframe.src = url;
    iframe.style.display = "block";
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
}
iframe.onload = () => {
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    if (!doc) return;
    const audioIds = ["WW1Hover", "WW2Hover", "ColdWarHover", "ModernHover", "UkraineHover", "GermanyHover","RussiaHover","USAHover","JapanHover","FranceHover","UKHover"];

    for (const id of audioIds) {
        const audio = doc.getElementById(id);
        if (audio) {
            const body = doc.body;
            if (!body) return;

            body.onmouseenter = null;
            body.onmouseleave = null;


            body.onmouseenter = () => {
                audio.currentTime = 0;
                audio.volume = 0.6;
                audio.play().catch(e => {
                    console.log("Error al reproducir audio en iframe:", e);
                });
            };

            body.onmouseleave = () => {
                audio.pause();
                audio.currentTime = 0;
            };

            break;
        }
    }
};
