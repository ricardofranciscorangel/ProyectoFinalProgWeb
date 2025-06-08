let canPlayAudio = false;

document.addEventListener("click",() => {
    canPlayAudio = true;
});
function playHoverSoundWW1(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio =document.getElementById("WW1Hover");
    audio.currentTime = 0.6;
    audio.play();
        },1000);
    }
}
function stopHoverSoundWW1(){
    clearTimeout(hoverTimeout)
    const audio = document.getElementById("WW1Hover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundWW2(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("WW2Hover");
    audio.volume = 0.6;
    audio.currentTime = 1;
    audio.play();
        },1000);
    }
}
function stopHoverSoundWW2(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("WW2Hover")
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundColdWar(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("ColdWarHover");
    audio.volume = 0.4;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundColdWar(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("ColdWarHover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundModern(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("ModernHover");
    audio.volume = 0.7;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundModern(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("ModernHover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundUkraine(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("UkraineHover");
    audio.volume = 0.6;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundUkraine(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("UkraineHover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundGermany(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("GermanyHover");
    audio.volume = 0.4;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundGermany(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("GermanyHover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundRussia(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("RussiaHover");
    audio.volume = 0.3;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundRussia(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("RussiaHover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundUSA(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("USAHover");
    audio.volume = 0.4;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundUSA(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("USAHover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundJapan(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("JapanHover");
    audio.volume = 0.6;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundJapan(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("JapanHover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundFrance(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("FranceHover");
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundFrance(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("FranceHover");
    audio.pause();
    audio.currentTime = 0;
}


function playHoverSoundUK(){
    if(canPlayAudio){
        hoverTimeout = setTimeout(() => {
    const audio = document.getElementById("UKHover");
    audio.volume = 0.5;
    audio.currentTime = 0;
    audio.play();
        },1000);
    }
}
function stopHoverSoundUK(){
    clearTimeout(hoverTimeout);
    const audio = document.getElementById("UKHover");
    audio.pause();
    audio.currentTime = 0;
}

