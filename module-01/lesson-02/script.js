//1

const a = 7;
const b = 9;
console.log(a * b);

//2
const c = 7;
const d = 9;
const out2 = document.querySelector(".out-2");
out2.textContent = c / d;

//3
const e = 3;
const f = 5;
const out3 = document.querySelector(".out-3");
out3.textContent = e + f;

//4

const e1 = "3";
const f1 = 5;
const out4 = document.querySelector(".out-4");
out4.textContent = e1 + f1;

//5
const e2 = 3;
const f2 = 0;
const out5 = document.querySelector(".out-5");
out5.textContent = e2 / f2;

//6
const e3 = 3;
const f3 = "Hello";
const out6 = document.querySelector(".out-6");
out6.textContent = e3 + f3;

//7
const e4 = 3;
const f4 = "Hello";
const out7 = document.querySelector(".out-7");
out7.textContent = e4 * f4;

//8

const input8 = document.querySelector(".i-8");
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");

btn8.onclick = task8;

function task8() {
  const userInput = input8.value;
  out8.textContent = userInput;
  input8.value = "";
}

//9

const input9 = document.querySelector(".i-9");
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");

btn9.onclick = task9;

function task9() {
  const userInput = input9.value;
  out9.textContent = userInput;
  input9.value = "";
}

//10
const input10 = document.querySelector(".i-10");
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

btn10.onclick = task10;

function task10() {
  const userInput = input10.value;
  out10.textContent = userInput * 20;
  input10.value = "";
}

//11

const input11 = document.querySelector(".i-11");
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = task11;

function task11() {
  const userInput = input11.value;
  out11.textContent = userInput + 55;
  input11.value = "";
}

//12

const input121 = document.querySelector(".i-12-1");
const input122 = document.querySelector(".i-12-2");
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");

btn12.onclick = task12;

function task12() {
  const userName = input121.value;
  const userSurname = input122.value;

  out12.textContent = `Hello ${userName} ${userSurname}`;
  input121.value = "";
  input122.value = "";
}

//13
const input131 = document.querySelector(".i-13-1");
const input132 = document.querySelector(".i-13-2");
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");

btn13.onclick = task13;

function task13() {
  const num1 = Number(input131.value);
  const num2 = Number(input132.value);

  out13.textContent = num1 + num2;
  input131.value = "";
  input132.value = "";
}

//14
const input14 = document.querySelector(".i-14");
const btn14 = document.querySelector(".b-14");

btn14.onclick = task14;

function task14() {
  input14.value = "Go";
}

//15
const input15 = document.querySelector(".i-15");
const btn15 = document.querySelector(".b-15");

btn15.onclick = task15;

function task15() {
  input15.setAttribute("style", "border: 4px solid red");
}

//16
const input161 = document.querySelector(".i-16-1");
const input162 = document.querySelector(".i-16-2");
const btn16 = document.querySelector(".b-16");
const out16 = document.querySelector(".out-16");

btn16.onclick = task16;

function task16() {
  const num1 = input161.value;
  const num2 = input162.value;

  out16.textContent = num1 + num2;
  input161.value = "";
  input162.value = "";
}

//17
const input17 = document.querySelector(".i-17");
const btn17 = document.querySelector(".b-17");
const out171 = document.querySelector(".out-17-1");
const out172 = document.querySelector(".out-17-2");
const out173 = document.querySelector(".out-17-3");

btn17.onclick = task17;

function task17() {
  const num1 = input17.value;

  out171.textContent = Number(num1);
  out172.textContent = Number.parseInt(num1);
  out173.textContent = Number.parseFloat(num1);
  input17.value = "";
}

//18
const input18 = document.querySelector(".i-18");
const btn18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");

btn18.onclick = task18;

function task18() {
  const a = input18.value;

  out18.textContent = Number.parseFloat(a);
  input18.value = "";
}

//19

const input191 = document.querySelector(".i-19-1");
const input192 = document.querySelector(".i-19-2");
const btn19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");

btn19.onclick = task19;

function task19() {
  const num1 = Number(input191.value);
  const num2 = Number(input192.value);

  out19.textContent = num1 + num2;
}

//20

const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");
let count = 0;

btn20.onclick = task20;

function task20() {
  count += 1;
  out20.textContent = count;
}