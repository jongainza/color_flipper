const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const main = document.querySelector("main");
const span = document.querySelector(".color");

btn.addEventListener("click", function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 15)];
  }
  main.style.background = color;
  span.innerHTML = color;
  console.log(color);
});
