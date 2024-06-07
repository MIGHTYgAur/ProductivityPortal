let timer;
let minutes;
let seconds=0;
let isPause=true;
var pomodoroLength=25;
var shortBreakLength=5;
var longBreakLength=15;


const playButton=document.getElementById("play-btn")
const resetButton=document.getElementById("reset-btn");

function handleFormSubmission(event){
    event.preventDefault(event);
    pomodoroLength = parseInt(document.getElementById("pomodoro-length").value);
    shortBreakLength = parseInt(document.getElementById("short-break-length").value);
    longBreakLength = parseInt(document.getElementById("long-break-length").value);
    hideForm();
    pomodoro();
 }
 
function pomodoro(){
    clearInterval(timer);
    document.getElementById("pomoBtn1").style.backgroundColor="#FFF2F2";
    document.getElementById("pomoBtn1").style.color="#0D0404";
    document.getElementById("pomoBtn2").style.backgroundColor="#0D0404";
    document.getElementById("pomoBtn2").style.color="#FFF2F2";
    document.getElementById("pomoBtn3").style.backgroundColor="#0D0404";
    document.getElementById("pomoBtn3").style.color="#FFF2F2";
    minutes=pomodoroLength;
    const clock=document.getElementById("clockCircle");
    clock.style.backgroundColor = "#0D0404";
    resetTimer();

}

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
    minutes=pomodoroLength;
    seconds=0;
    // isPause = !isPause;
    // if(isPause){
    //     clearInterval(timer);
    //     playButton.src="/public/resume1.png";
    // }
    /* else
    
        startTimer();
        playButton.src="/public/pause1.png";
     }*/
     document.getElementById("pomoBtn1").style.backgroundColor="#FFF2F2";
     document.getElementById("pomoBtn1").style.color="#0D0404";
     document.getElementById("pomoBtn2").style.backgroundColor="#0D0404";
     document.getElementById("pomoBtn2").style.color="#FFF2F2";
     document.getElementById("pomoBtn3").style.backgroundColor="#0D0404";
     document.getElementById("pomoBtn3").style.color="#FFF2F2";

    const clock=document.getElementById("clockCircle");
    clock.style.backgroundColor = "#0D0404";
    const timeElement=document.getElementById("time");
    
    timeElement.textContent=formatTime(minutes,seconds);
    isPause=false;
    playButton.src="/public/resume1.png";
    clearInterval(timer);
}
function shortBreak(){
        clearInterval(timer);
        const clock=document.getElementById("clockCircle");
        clock.style.backgroundColor = "#FAAD07";
        document.getElementById("pomoBtn1").style.backgroundColor="#0D0404";
        document.getElementById("pomoBtn1").style.color="#FFF2F2";
        document.getElementById("pomoBtn2").style.backgroundColor="#FFF2F2";
        document.getElementById("pomoBtn2").style.color="#0D0404";
        document.getElementById("pomoBtn3").style.backgroundColor="#0D0404";
        document.getElementById("pomoBtn3").style.color="#FFF2F2";

        minutes=shortBreakLength;
        seconds=0;
        const timeElement=document.getElementById("time");
        timeElement.textContent = formatTime(minutes,seconds);
        playButton.src="/public/resume1.png";
        clearInterval(timer);
       
}
function longBreak(){

        clearInterval(timer);
        const clock=document.getElementById("clockCircle");
        clock.style.backgroundColor = "#E85D04";
        document.getElementById("pomoBtn1").style.backgroundColor="#0D0404";
        document.getElementById("pomoBtn1").style.color="#FFF2F2";
        document.getElementById("pomoBtn3").style.backgroundColor="#FFF2F2";
        document.getElementById("pomoBtn3").style.color="#0D0404";
        document.getElementById("pomoBtn2").style.backgroundColor="#0D0404";
        document.getElementById("pomoBtn2").style.color="#FFF2F2";

        clearInterval(timer);
        minutes=longBreakLength;
        seconds=0;
        const timeElement=document.getElementById("time");
        timeElement.textContent = formatTime(minutes,seconds);
        playButton.src="/public/resume1.png";
        clearInterval(timer);
}

//form handling part
const showFormBtn = document.getElementById("settings");
const formContainer = document.getElementById("form-container");

let click=0;
showFormBtn.addEventListener("click", function() {
    click=click+1;
    if(click === 2){
        formContainer.style.display = "none";
        click=0;
    }
    formContainer.style.display = "block";
});


pomodoro();
playButton.addEventListener("click",pauseToResume);
resetButton.addEventListener("click",resetTimer);
