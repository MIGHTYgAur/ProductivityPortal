let timer;
let minutes=25;
let seconds=0;
let isPause=false;
const playButton=document.getElementById("play-btn")
const resetButton=document.getElementById("reset-btn");
function startTimer(){
    timer = setInterval(updateTimer,1000);
}
function updateTimer(){
    const timeElement=document.getElementById("time");
    timeElement.textContent=formatTime(minutes,seconds);
    if(seconds === 0 && minutes === 0)
    {   clearInterval(timer);
        alert("Time for a break!")
    }
    else if(!isPause){
        if(seconds>0){
        seconds--;
        }
        else{
        seconds=59;
        minutes--;
        }
    }
}
function formatTime(minutes,seconds){
    return `${String(minutes).padStart(2,0)} : ${String(seconds).padStart(2,0)}`;
}
function pauseToResume(){
    isPause = !isPause;
    if(isPause){
        clearInterval(timer);
        playButton.src="/public/resume1.png";
    }
    else{
        startTimer();
        playButton.src="/public/pause1.png";
    }
}
function resetTimer(){
    clearInterval(timer);
    minutes=25;
    seconds=0;
    const timeElement=document.getElementById("time");
    timeElement.textContent=formatTime(minutes,seconds);
    isPause=false;
    playButton.src="/public/pause.png";
    startTimer();
}
function shortBreak(){
        clearInterval(timer);
        const clock=document.getElementById("clockCircle");
        clock.style.backgroundColor = "rgb(238, 87, 87)";
        minutes=5;
        seconds=0;
        const timeElement=document.getElementById("time");
        timeElement.textContent = formatTime(minutes,seconds);
        startTimer();
}
function longBreak(){

        clearInterval(timer);
        const clock=document.getElementById("clockCircle");
        clock.style.backgroundColor = "rgb(238, 87, 87)";
        clearInterval(timer);
        minutes=15;
        seconds=0;
        const timeElement=document.getElementById("time");
        timeElement.textContent = formatTime(minutes,seconds);
        startTimer();
}
function pomodoro(){
        const clock=document.getElementById("clockCircle");
        clock.style.backgroundColor = "#0D0404";
        clearInterval(timer);
        resetTimer();
}

function handleFormSubmission(){
   const pomodoroLength = document.getElementById("pomodoro-length").value;
   const shortBreakLength = document.getElementById("short-break-length").value;
   const longBreakLength = document.getElementById("long-break-length").value;

   clearInterval(timer);
   minutes = pomodoroLength;
   shortBreak(shortBreakLength);
   longBreak(longBreakLength);

}


playButton.addEventListener("click",pauseToResume);
resetButton.addEventListener("click",resetTimer);

startTimer();