const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handlePlayClick = (e) => {
    // 비디오가 재생중이라면 멈추기
    if(video.paused){
        video.play();
    } else {        
        video.pause();
    }
    // 아나면 재생
};

const handlePause = () => (playBtn.innerText = "Play");
const handlePlay = () => (playBtn.innerText = "Pause");


const handleMute = (e) => {};


playBtn.addEventListener("click",handlePlayClick);
muteBtn.addEventListener("click",handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay); 

