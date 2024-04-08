/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let arrayNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "K"];
let symbols = ["♠", "♣", "♥", "♦"];
let intervalId;

function generatedRandomCard() {
  let SymbolsRandomIndex = Math.floor(Math.random() * symbols.length);
  let NumberRandomIndex = Math.floor(Math.random() * arrayNumbers.length);

  let randomNumbers = arrayNumbers[NumberRandomIndex];
  let randomSymbols = symbols[SymbolsRandomIndex];
  console.log("este es el numero random: ", randomNumbers);
  console.log("este es el symbolo random: ", randomSymbols);

  let symbolTop = document.querySelector("#symbolTop");
  let symboloBottom = document.querySelector("#symbolBottom");
  let numberMiddle = document.querySelector("#numberOne");

  symbolTop.innerHTML = randomSymbols;
  symboloBottom.innerHTML = randomSymbols;
  numberMiddle.innerHTML = randomNumbers;
}

intervalId = setInterval(() => {
  generatedRandomCard();
}, 1000);

const stopRandomCard = () => clearInterval(intervalId);
