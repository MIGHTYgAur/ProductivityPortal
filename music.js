const music =[
  "/public/audioplali/lofi.mp3","/public/audioplali/somberclassical1.mp3"
]
var playPauseButton = document.getElementById('play-pause');
var audioPlayer = document.getElementById('audioPlayer');

var currentIndex = null;
function playMusic(){
document.getElementById('audioSelect').addEventListener('change', function(){
    var selectedAudio = this.value;   
    currentIndex = music.findIndex(song => song === selectedAudio);
    if(selectedAudio) {
        audioPlayer.src = selectedAudio;
        console.log(selectedAudio);
      } 
    else {
        audioPlayer.pause(); // Pause the audio if no option selected
      }
    
});
}
function nextSong(){

  currentIndex = (currentIndex + 1) % music.length;
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = music[currentIndex];
  var selectElement = document.getElementById('audioSelect');
  selectElement.value = music[currentIndex];
  audioPlayer.pause();
  playPauseButton.src = '/public/play.png'; 
}
document.getElementById("nextbtn").addEventListener("click",nextSong);

function prevSong(){

  currentIndex = (currentIndex - 1) % music.length;
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = music[currentIndex];
  var selectElement = document.getElementById('audioSelect');
  selectElement.value = music[currentIndex];
  audioPlayer.pause();
  playPauseButton.src = '/public/play.png'; 
}
document.getElementById("prevbtn").addEventListener("click",prevSong);

function playToPause(){
document.addEventListener('DOMContentLoaded', function() {
 
  playPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.src = '/public/stopmusic.png';
    } else {
      audioPlayer.pause();
      playPauseButton.src = '/public/play.png'; 
    }
  });
})
}

playMusic();
playToPause();