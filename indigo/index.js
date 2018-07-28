function beginTime() {
    let button = document.getElementById("time");
    let video = document.getElementById("video");

    console.log("Running pseudoshuffle");
    pseudoShuffle();

    console.log("Swapping button with video");
    button.style.display = 'none';
    video.style.display = 'block';

    console.log("end");
    
}

function pseudoShuffle() {
    let max = 273;
    let index = Math.floor((Math.random() * max) + 1);
    let url = "https://www.youtube.com/embed/videoseries?list=PLbkUcwpKDITt-dkXqG-KG5cRR4-iIknTO&autoplay=1&controls=0&disablekb=1&enablejsapi=1&showinfo=0&rel=0&shuffle=1&index=" + index;
    let video = document.getElementById("inner");

    video.src = url;
}

