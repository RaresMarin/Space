const joc = document.getElementById("joc");
const racheta = document.getElementById("racheta");
const bulete = document.getElementById("bulete");
const scor = document.getElementById("scor");
let bici = 0;


window.addEventListener("mousemove", (e) => {
  const jocRect = joc.getBoundingClientRect();
  let x = e.clientX - jocRect.left - racheta.offsetWidth / 2;
  racheta.style.left = x + "px";
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    Boom();
  }
});

function Boom() {
  let audio = document.getElementById("audio");
  audio.src="piu.mp3";
  audio.play();
  const nouBulet = document.createElement("div");
  nouBulet.className = "boom";
  joc.appendChild(nouBulet);

  const racheta_loc = racheta.getBoundingClientRect();
  const joc_loc = joc.getBoundingClientRect();

  nouBulet.style.left =
    racheta_loc.left - joc_loc.left + racheta_loc.width / 2 - 4 + "px";
  nouBulet.style.top = racheta_loc.top - joc_loc.top - 20 + "px";

  let interval = setInterval(() => {
    let top = parseInt(nouBulet.style.top);
    if (top <= 0) {
      nouBulet.remove();
      clearInterval(interval);
    } else {
      nouBulet.style.top = top - 10 + "px";
      verificaColiziuni(nouBulet, interval);
    }
  }, 30);
}


let ci = setInterval(() => {
  const asteroid = document.createElement("div");
  asteroid.className = "asteroid";
  joc.appendChild(asteroid);

  asteroid.style.left = Math.random() * (joc.clientWidth - 50) + "px";
  random = Math.floor(Math.random()*500);
  asteroid.style.top = random + "px";

  let down = setInterval(() => {
    let top = parseInt(asteroid.style.top);
    if (top > joc.clientHeight - 50) {
      asteroid.remove();
      clearInterval(down);
    } else {
      asteroid.style.top = top + 1000 + "px"; 
    }
  }, 30000);
}, 1000);

function verificaColiziuni(bulet, interval) {
  const asteroids = document.querySelectorAll(".asteroid");

  asteroids.forEach((ast) => {
    const bRect = bulet.getBoundingClientRect();
    const aRect = ast.getBoundingClientRect();

    if (
      bRect.left < aRect.right &&
      bRect.right > aRect.left &&
      bRect.top < aRect.bottom &&
      bRect.bottom > aRect.top
    ) {
      // coliziune detectată!
      bulet.remove();
      ast.remove();
      bici += 1;
      clearInterval(interval);
      scor.innerHTML = "Scor: " + bici;
    }
  });
}
function ceva(){
  clearInterval(ci);
}