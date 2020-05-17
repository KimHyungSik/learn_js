const body = document.querySelector("body");

const IMG_NUMBER = 3;

const Video = document.createElement("video"),
  source = document.createElement("source");

function paintVideo(imgNumber) {
  Video.loop = " ";
  Video.autoplay = " ";
  Video.muted = " ";
  Video.classList.add("bgImage");

  source.src = `video/${imgNumber + 1}.mp4`;
  source.type = "video/mp4";
  Video.appendChild(source);
  body.appendChild(Video);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintVideo(randomNumber);
}

init();
