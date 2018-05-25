let duration = 0;
let pauseState = 0;
let workComplete = false;
let workDisplay = document.querySelector("#workDisplay");
let restDisplay = document.querySelector("#restDisplay");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let workTime = document.querySelector("#workTime");
let restTime = document.querySelector("#restTime");
let workTimePlus = document.querySelector("#workTimePlus");
let workTimeMinus = document.querySelector("#workTimeMinus");
let restTimePlus = document.querySelector("#restTimePlus");
let restTimeMinus = document.querySelector("#restTimeMinus");
let pause = document.querySelector("#pause");
start.addEventListener('click', (e) => {
    //if paused do something
    //if started do something else
    if (pauseState == 0){
        pauseState = 1;
        workDuration = workTime.textContent*60;
        timer(workDuration, workDisplay);

    }else if (pauseState == 2){
        pauseState = 1;
        timer(workDuration, workDisplay);
    };
    timer(workDuration, workDisplay);
});
pause.addEventListener('click', (e) => {
    //fix duration + stop timer function
    pauseState = 2;
});
stop.addEventListener('click', (e) => {
    //resets everyting to initial values - perhaps need to store initial values
    pauseState = 0;
});
reset.addEventListener('click', (e) => {
    location.reload();
});
workTimePlus.addEventListener('click', (e) => {
    if (pauseState == 0){
        workTime.textContent ++;
        workDisplay.textContent = secsToDisplay(workTime.textContent*60);
    }
})
workTimeMinus.addEventListener('click', (e) => {
    if (pauseState == 0){
        workTime.textContent --;
        workDisplay.textContent = secsToDisplay(workTime.textContent*60);
    }
})
restTimePlus.addEventListener('click', (e) => {
    restTime.textContent ++;
})
restTimeMinus.addEventListener('click', (e) => {
    restTime.textContent --;
})



function timer(duration, display) {
    
    let interval = setInterval(function () {
        display.textContent = secsToDisplay(duration);
        duration --;
        
        if (duration < 0) {
            workComplete = true;
            clearInterval(interval);
        }
        if (pauseState == 2){
            clearInterval(interval);
            workDuration = duration;
        }else if (pauseState == 0){
            clearInterval(interval);
            workDisplay.textContent = secsToDisplay(workTime.textContent*60);
        };
    }, 1000);
}
function secsToDisplay (duration){
    minutes = parseInt(duration / 60, 10)
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
}

if (workComplete == true){
        alert("Work time complete!")
        duration = restTime.textContent*60;
        timer(duration, restDisplay)
    }