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
start.addEventListener('click', (e) => {
    timer(workTime.textContent*60, workDisplay);
});
reset.addEventListener('click', (e) => {
    location.reload();
});
workTimePlus.addEventListener('click', (e) => {
    workTime.textContent ++;
})
workTimeMinus.addEventListener('click', (e) => {
    workTime.textContent --;
})
restTimePlus.addEventListener('click', (e) => {
    restTime.textContent ++;
})
restTimeMinus.addEventListener('click', (e) => {
    restTime.textContent --;
})



function timer(duration, display) {
    
    let interval = setInterval(function () {
        minutes = parseInt(duration / 60, 10)
        seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        duration --;
        
        if (duration <= 0) {
            clearInterval(interval);
            timer(restTime.textContent*60, restDisplay);
        }
    }, 1000);
}
