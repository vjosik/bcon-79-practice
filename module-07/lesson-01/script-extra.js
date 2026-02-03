// Task 1
// const inp1 = document.querySelector("#input");
// const btn1 = document.querySelector("button");
// btn1.addEventListener("click", e => (inp1.value = "Hello world"));
// Task 2
// const inp2 = document.querySelector("#input");
// const btn2 = document.querySelector("button");
// btn2.addEventListener("click", e => alert((inp2.value = "Hello world")));
// Task 3
// const inp31 = document.querySelector("#first-input");
// const inp32 = document.querySelector("#second-input");
// const btn3 = document.querySelector("button");
// btn3.addEventListener('click', onBtnClick)
// function onBtnClick(){
//     let variable = inp31.value;
//     inp31.value = inp32.value;
//     inp32.value = variable;
// }
// Task 4
// const paragraphs = document.querySelectorAll("p");
// const btn4 = document.querySelector("button");
// btn4.addEventListener("click", onBtnClick);
// function onBtnClick() {
//   paragraphs.forEach((el, i) => (el.textContent = i + 1));
// }
// Task 5
const inp51 = document.querySelector("#test");
const inp52 = document.querySelector("#result");
const btn5 = document.querySelector("button");
btn5.addEventListener("click", onBtnClick);
function onBtnClick() {
  if (isNaN(Number(inp51.value))) {
    inp52.setAttribute("disabled", true);
    inp52.value = "";
    alert("Ввели не число");
  } else {
    inp52.removeAttribute("disabled");
    inp52.value = Math.pow(Number(inp51.value), 2);
  }
}
// Task 6

// Task 7

// Task 8

// Task 9

// Task 10

// Task 11

// Task 12

// Task 13

// Task 14
