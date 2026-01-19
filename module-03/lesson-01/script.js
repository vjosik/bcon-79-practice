// Task-1
const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");
const ar1 = ["text", 1, true, false];
btn1.onclick = fn1;
function fn1() {
  out1.textContent = ar1;
}

// Task-2
const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");
const ar2 = ["text", 1, true, false];
btn2.onclick = fn2;
function fn2() {
  let result = "";
  for (const item of ar2) {
    result += item + ", ";
  }
  out2.textContent = result;
}
// Task-3
const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");
const ar3 = ["text", 1, true, false];
btn3.onclick = fn3;
function fn3() {
  out3.textContent = ar3.length;
}
// Task-4
const out4 = document.querySelector(".out-4");
const btn4 = document.querySelector(".b-4");
const ar4 = ["text", 1, true, false];
btn4.onclick = fn4;
function fn4() {
  out3.textContent = ar3.length;
}
// Task-5
const out5 = document.querySelector(".out-5");
const btn5 = document.querySelector(".b-5");
const ar5 = [0, 1, 2, 3, 4, 5, 6];
btn5.onclick = fn5;
function fn5() {
  out5.textContent = ar5[0] + ar5[2] + ar5[3];
}

// Task-6
const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");
const ar6 = ["Ihor", "oven", 13, "april"];
btn6.onclick = fn6;
function fn6() {
  let result = "";
  for (let i = 0; ar6.length > i; i++) {
    result += ar6[i] + " ";
  }
  out6.textContent = result;
}

// Task-7
const out7 = document.querySelector(".out-7");
const btn7 = document.querySelector(".b-7");
const ar7 = [];
btn7.onclick = fn7;
function fn7() {
  let result = "";
  ar7[5] = "italy";
  ar7[6] = "turkey";
  ar7[7] = "vietnam";
  for (let i = 0; ar7.length > i; i++) {
    result += ar7[i] + " ";
  }
  out7.textContent = result;
}

// Task-8
const out8 = document.querySelector(".out-8");
const out81 = document.querySelector(".out-8-1");
const btn8 = document.querySelector(".b-8");
const ar8 = [];
btn8.onclick = fn8;
function fn8() {
  let result = "";
  ar8[3] = 3.14;
  ar8[4] = 17;
  ar8[6] = 5;
  for (let i = 0; ar8.length > i; i++) {
    result += ar8[i] + "-";
  }
  out8.textContent = result;
  out81.textContent = ar8.length;
}
// Task-9
const out9 = document.querySelector(".out-9");
const btn9 = document.querySelector(".b-9");
const ar9 = [4, 5, 6, 7, 8, 9, 10];
btn9.onclick = fn9;
function fn9() {
  for (let i = 0; ar9.length > i; i++) {
    if (ar9.length - 1 === i) {
      out9.textContent = ar9[i];
    }
  }
}
// Task-10
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");
const ar10 = [100, 200, 300, 400, 700, 121];
btn10.onclick = fn10;
function fn10() {
  for (let i = 0; ar10.length > i; i++) {
    if (ar10.length - 1 === i) {
      out10.textContent = ar10[0] + ar10[i];
    }
  }
}

// Task-11
const out11 = document.querySelector(".out-11");
const btn11 = document.querySelector(".b-11");
const ar11 = [2, 3, 4, 5, 6, 7];
btn11.onclick = fn11;
function fn11() {
  let temp = ar11[2];
  ar11[2] = ar11[4];
  ar11[4] = temp;
  out11.textContent = ar11.join(" ");
}
// Task-12
const out12 = document.querySelector(".out-12");
const btn12 = document.querySelector(".b-12");
const ar12 = ["test", "west", "list", "class", "best"];
btn12.onclick = fn12;
function fn12() {
  let temp;
  for (let i = 0; i < ar12.length; i++) {
    if (ar12.length - ar12.length === i) {
      temp = ar12[i];
    }
    if (ar12.length - 1 === i) {
      ar12[i - (ar12.length - 1)] = ar12[i];
      ar12[i] = temp;
    }
  }
  out12.textContent = ar12;
}
// Task-13
const out13 = document.querySelector(".out-13");
const btn13 = document.querySelector(".b-13");
const ar13 = ["test", "west", "list", "class", "best"];
btn13.onclick = fn13;
function fn13() {
  let result = "";
  for (let i = 0; i < ar13.length; i++) {
    result += `${i} ${ar13[i]} `;
  }
  out13.textContent = result;
}
// Task-14
const out14 = document.querySelector(".out-14");
const btn14 = document.querySelector(".b-14");
const ar14 = [1, 2, 3, "hello", 66];
btn14.onclick = fn14;
function fn14() {
  let result = "";
  for (let i = ar14.length - 1; i >= 0; i--) {
    result += `${ar14[i]} `;
  }
  out14.textContent = result;
}
// Task-15
const out15 = document.querySelector(".out-15");
const btn15 = document.querySelector(".b-15");
const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
btn15.onclick = fn15;
function fn15() {
  let result = "";
  for (const num of ar15) {
    if (num > 0) {
      result += `${num} `;
    } else {
      continue;
    }
  }
  out15.textContent = result;
}

// Task-16
const out16odd = document.querySelector(".out-16-odd");
const out16even = document.querySelector(".out-16-even");
const btn16 = document.querySelector(".b-16");
const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const ar16_odd = [];
const ar16_even = [];
btn16.onclick = fn16;
let y = 0;
function fn16() {
  let ar16OddIndex = 0;
  let ar16EvenIndex = 0;
  for (let i = 0; i < ar16.length; i++) {
    if (ar16[i] % 2 === 0) {
      ar16_odd[ar16OddIndex] = ar16[i];
      ar16OddIndex++;
    } else {
      ar16_even[ar16EvenIndex] = ar16[i];
      ar16EvenIndex++;
    }
  }
  out16odd.textContent = ar16_odd.join(" ");
  out16even.textContent = ar16_even.join(" ");
}
// Task-17
const out17 = document.querySelector(".out-17");
const btn17 = document.querySelector(".b-17");
const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
btn17.onclick = fn17;
function fn17() {
  let counter = 0;
  for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
      counter++;
    }
  }
  out17.textContent = counter;
}
// Task-18
const out18 = document.querySelector(".out-18");
const btn18 = document.querySelector(".b-18");
const ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
btn18.onclick = fn18;
function fn18() {
  let max = ar18[0];
  for (const num of ar18) {
    if (num > max) {
      max = num;
    } else {
      continue;
    }
  }
  out18.textContent = max;
}
// Task-19
const out19 = document.querySelector(".out-19");
const btn19 = document.querySelector(".b-19");
const ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

btn19.onclick = fn19;

function fn19() {
  let minIndex = 0;

  for (let i = 1; i < ar19.length; i++) {
    if (ar19[i] < ar19[minIndex]) {
      minIndex = i;
    }
  }

  out19.textContent = minIndex;
}
// Task-20
const out20 = document.querySelector(".out-20");
const btn20 = document.querySelector(".b-20");
const ar20 = [4, 5, 6, 7, 8, 9, 10];

btn20.onclick = fn20;

function fn20() {
  let sum = 0;

  for (const num of ar20) {
    sum += num;
  }

  out20.textContent = sum;
}
