/* eslint-disable */
import "bootstrap";
import "./style.css";

function newCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  document.querySelector("#top").innerHTML = suits[indexSuits];
  document.querySelector("#end").innerHTML = suits[indexSuits];
  document.querySelector("#number").innerHTML = numbers[indexNumbers];

  let color =
    suits[indexSuits] == "♦" || suits[indexSuits] == "♥"
      ? "text-danger"
      : "text-dark";
  document.querySelector("#top").className = color;
  document.querySelector("#end").className = color;
  document.querySelector("#number").className = color;
}

setInterval(() => newCard(), 5000);

document.querySelector("#newCard").addEventListener("click", () => newCard());

window.onload = function() {
  newCard();
};
