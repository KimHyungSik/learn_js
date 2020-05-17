const clokContainer = document.querySelector(".js-clock"),
  clockTitle = clokContainer.querySelector("h1");

function getTime() {
  const data = new Date();
  const minutes = data.getMinutes();
  const hours = data.getHours();
  const seconds = data.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
