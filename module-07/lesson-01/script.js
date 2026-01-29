// Task 01
function fn1() {
  document.querySelector(".out-1").textContent = 1;
}
document.querySelector(".b-1").onclick = fn1;
// Task 02
function fn2() {
  document.querySelector(".out-2").textContent = 2;
}
document.querySelector(".i-2").onclick = fn2;
// Task 03
function fn3() {
  document.querySelector(".out-3").textContent = 3;
}
document.querySelector(".p-3").onclick = fn3;
// Task 04
function fn4() {
  const checkbox = document.querySelector(".i-4");
  document.querySelector(".out-4").textContent = checkbox.checked;
}
document.querySelector(".b-4").onclick = fn4;
// Task 05
function fn5() {
  const checkbox = document.querySelector(".i-5");
  const out5 = document.querySelector(".out-5");
  //   if (checkbox.checked) {
  //     out5.textContent = checkbox.value;
  //   } else {
  //     out5.textContent = false;
  //   }
  //   out5.textContent = checkbox.checked ? checkbox.value : false;
  out5.textContent = checkbox.checked && checkbox.value;
}
document.querySelector(".b-5").onclick = fn5;
// Task 06
const fn6 = () =>
  (document.querySelector(".out-6").textContent =
    document.querySelector(".i-6").value);
document.querySelector(".b-6").onclick = fn6;
// Task 07
const fn7 = () => {
  document.querySelector(".out-71").textContent =
    document.querySelector(".i-7").value;
  if (document.querySelector(".i-7").value.length >= 6) {
    document.querySelector(".out-72").textContent = 1;
  } else {
    document.querySelector(".out-72").textContent = 0;
  }
};

document.querySelector(".b-7").onclick = fn7;
// Task 08
const fn8 = () => {
  document.querySelector(".out-8").innerHTML =
    `<div class = "js2"> new div </div>`;
};
document.querySelector(".b-8").onclick = fn8;
// Task 09
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const rad9 = document.querySelector(".r-9");
const fn9 = () => {
  out9.textContent = rad9.checked && rad9.value;
};
btn9.onclick = fn9;
// Task 10

const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
const inp10 = document.querySelector(".i-10");
const fn10 = () => {
  out10.style.background = inp10.value;
};
btn10.onclick = fn10;

// Task 11
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const i111 = document.querySelector(".i-111");
const i112 = document.querySelector(".i-112");
const fn11 = () => {
  i111.value = i112.value;
};
btn11.onclick = fn11;
// Task 12
function fn12() {
  document.querySelector(".out-12").textContent =
    document.querySelector(".i-12").value;
}
document.querySelector(".b-12").onclick = fn12;
// btn.onclick = fn;
// Task 13
function fn13() {
  document.querySelector(".out-13").textContent =
    document.querySelector(".i-13").value;
}
document.querySelector(".b-13").onclick = fn13;
// Task 14

function fn14() {
  document.querySelector(".out-14").textContent =
    document.querySelector(".t-14").value;
}
document.querySelector(".b-14").onclick = fn14;
// Task 15
function fn15() {
  const inpValue = document.querySelector(".i-15").value;
  document.querySelector(".out-15").textContent = inpValue;
  document.querySelector(".t-15").value = inpValue;
}
document.querySelector(".b-15").onclick = fn15;
// Task 16
function fn16() {
  const s16 = document.querySelector(".s-16").value;
  document.querySelector(".out-16").textContent = s16;
}
document.querySelector(".b-16").onclick = fn16;
// Task 17
function fn17() {
  const s17 = document.querySelector(".s-17").value;
  document.querySelector(".out-17").textContent = s17;
}
document.querySelector(".s-17").onchange = fn17;
// Task 18
function fn18() {
  const s18 = document.querySelector(".s-18").value;
  document.querySelector(".i-18").value = s18;
}
document.querySelector(".s-18").onchange = fn18;
// Task 19

// Task 20
