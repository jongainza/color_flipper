const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const main = document.querySelector("main");
const span = document.querySelector(".color");
console.dir(main);
console.log(btn);
console.log(span);

btn.addEventListener("click", function () {
  const color = colors[Math.floor(Math.random() * 4)];
  main.style.background = color;
  span.innerHTML = color;
});
