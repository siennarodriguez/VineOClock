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
    /*vinesPar.innerHTML = vinesLeft + endText;*/

    console.log("end");
}

function pseudoShuffle() {
    let max = 273;
    let index = Math.floor((Math.random() * max) + 1);
    let url = "https://www.youtube.com/embed/videoseries?list=PLbkUcwpKDITt-dkXqG-KG5cRR4-iIknTO&autoplay=1&controls=0&disablekb=1&enablejsapi=1&showinfo=0&rel=0&shuffle=1&index=" + index;
    let video = document.getElementById("inner");

    video.src = url;
}

function removeInput() {
    let seconds = calcSecs();
    document.getElementById("timer").innerHTML = "";

    /*let initialTimer = document.getElementById("timer-countdown-init");
    initialTimer.id = "timer-countdown-active";*/
    return seconds;
}

function updateTimer() {
    // Time calculations for days, hours, minutes and seconds
    var timeleft = removeInput();
    document.getElementById("timer").style.display = "none";

    var downloadTimer = setInterval(function(){
    timeleft--;
    /*document.getElementById("timer-countdown-active").innerHTML = timeleft;*/
    document.getElementById("vineLeftId").innerHTML = timeleft + " seconds of vines left"
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);
}

/*
    // makes countdown numbers appear
    let initalTimer = document.getElementsByClassName("timer-countdown-init");
    initalTimer.className = "timer-countdown-active";

    var x = setInterval(function() {

        // Find the distance between now an the count down date
        var distance = calcSecs();

        // removes input boxes
        let inputBox = document.getElementsByClassName("timer-input");
        inputBox.display = "none";

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        document.getElementById("hr-cd").innerHTML = hours + "h ";
        document.getElementById("mm-cd").innerHTML =  + "h ";
        document.getElementById("ss-cd").innerHTML = hours + "h ";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "";
        }
    }, 1000);
*/

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