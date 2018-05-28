let globalDuration = 0;
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
    //if new start do this
    if (pauseState == 0){
        pauseState = 1;
        globalDuration = workTime.textContent*60;
        timer(globalDuration, workDisplay);   
    }else if (pauseState == 2){ //if recommencing from pause do this
        pauseState = 1;
        if (workComplete == true){
            timer(globalDuration, restDisplay);
        }else if (workComplete == false){
            timer(globalDuration, workDisplay);
        }
    };
});
pause.addEventListener('click', (e) => {
    //fix duration + stop timer function
    pauseState = 2;
});
stop.addEventListener('click', (e) => {
    //resets everyting to initial values - perhaps need to store initial values
    pauseState = 0;
    workDisplay.textContent = "";
    restDisplay.textContent = "";
    workComplete = false;
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
        
        if (duration < 0 && workComplete == false) {
            workComplete = true;
            clearInterval(interval);
            alert("Work time complete!");
            duration = restTime.textContent*60;
            timer(duration, restDisplay);
        }else if (duration < 0 && workComplete == true){
            workComplete = false;
            clearInterval(interval);
        }

        if (pauseState == 2){
            clearInterval(interval);
            globalDuration = duration;
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