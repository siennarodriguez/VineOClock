function beginTime() {
    let button, video, timeVals, vinesLeft, endText;

    button = document.getElementById("time");
    video = document.getElementById("video");
    vinesPar = document.getElementById("vineLeftId")

    console.log("Running pseudoshuffle");
    pseudoShuffle();

    console.log("Swapping button with video");
    button.style.display = 'none';
    video.style.display = 'block';

    console.log("Now trying to change timer");

    vinesLeft = numOfVines();

    if (vinesLeft === 1) {
        endText = " Vine left!";
    }
    else {
        endText = " Vines left!";
    }

    vinesPar.className = "newVineLeft"
    vinesPar.innerHTML = vinesLeft + endText;

    console.log("end");
}

function pseudoShuffle() {
    let max = 273;
    let index = Math.floor((Math.random() * max) + 1);
    let url = "https://www.youtube.com/embed/videoseries?list=PLbkUcwpKDITt-dkXqG-KG5cRR4-iIknTO&autoplay=1&controls=0&disablekb=1&enablejsapi=1&showinfo=0&rel=0&shuffle=1&index=" + index;
    let video = document.getElementById("inner");

    video.src = url;
}

function calcSecs() {
    let hours, minutes, seconds;

    hours = Number(document.getElementById("hr").value);
    minutes = Number(document.getElementById("min").value);
    seconds = Number(document.getElementById("sec").value);
    return ((hours*3600) + (minutes*60) + seconds);
}ow 

function numOfVines() {
    return (Math.floor(calcSecs()/7));
}