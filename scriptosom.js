let pScore = 0;
let compScore = 0;
let roundPlay = 0;

const container = document.querySelector(".container");
const scoreBoard = document.createElement("p");
scoreBoard.textContent =
  "Player points: 0 | Computer points: 0 | Rounds played: 0";
scoreBoard.classList.add("scoreboard");
container.appendChild(scoreBoard);

function getCompChoice() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getResult(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const compChoice = getCompChoice();
    const playerChoice = pil.className;
    const hasil = getResult(compChoice, playerChoice);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + compChoice + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      if (hasil == "MENANG!") {
        pScore++;
      } else if (hasil == "KALAH!") {
        compScore++;
      }
      roundPlay++;

      scoreBoard.textContent = `Player points: ${pScore} | Computer points: ${compScore} | Rounds played: ${roundPlay}`;
    }, 1000);
  });
});

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMula = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMula > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}
