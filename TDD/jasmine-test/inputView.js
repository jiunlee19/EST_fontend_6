let viewTxt = "Hello, Lions!";
viewTxt = document.getElementById("view");
let inputTxt
inputTxt = document.getElementById("inputTxt");

const inputBtn = document.getElementById("input");
inputBtn.addEventListener("click", {
  viewTxt.textContent = inputTxt.value;
})