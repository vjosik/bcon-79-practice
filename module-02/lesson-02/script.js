//  Task 1
// Кнопка .b-1 запускає функцію fn1. Функція повинна виводити в .out-1 рядок вигляду:
//     1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.
const b1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

b1.onclick = fn1;
function fn1() {
  let result = "";
  for (let i = 1; i <= 16; i++) {
    result += i + "_";
  }
  out1.textContent = result;
}

//  Task 2
// Кнопка .b-2 запускає функцію fn2. Функція повинна виводити в .out-2 рядок вигляду:
//     12_14_16_18_20_22_24_26_28_30_32_34_36_38_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.

const b2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

b2.onclick = fn2;
function fn2() {
  let result = "";
  for (let i = 12; i <= 38; i += 2) {
    result += i + "_";
  }
  out2.textContent = result;
}

//  Task 3
// Кнопка .b-3 запускає функцію fn3. Функція повинна виводити в .out-3 рядок вигляду:
//  25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// Роздільник - нижнє підкреслення. Завдання вирішується за допомогою циклу.
const b3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

b3.onclick = fn3;
function fn3() {
  let result = "";
  for (let i = 25; 7 <= i; i--) {
    result += i + "_";
  }
  out3.textContent = result;
}

//  Task 4
// Кнопка .b-4 запускає функцію fn4. Функція повинна виводити в .out-4 рядок вигляду:
//     77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// від 77 до 35 з кроком 3. Роздільник - знак підкреслення. Завдання вирішується за допомогою циклу.
const b4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");

b4.onclick = fn4;
function fn4() {
  let result = "";
  for (let i = 77; 35 <= i; i -= 3) {
    result += i + "_";
  }
  out4.textContent = result;
}
//  Task 5
// Кнопка .b-5 запускає функцію fn5. Функція повинна виводити в .out-5 рядок вигляду:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// від 1 до 17 з кроком 1. Роздільник - знак підкреслення та зірочка (якщо число непарне, і дві зірочки, якщо парне). Завдання вирішується за допомогою циклу.
const b5 = document.querySelector(".b-5");
const out5 = document.querySelector(".out-5");

b5.onclick = fn5;
function fn5() {
  let result = "";
  for (let i = 1; i <= 17; i++) {
    if (i % 2 === 0) {
      result += i + "_**";
    } else {
      result += i + "_*";
    }
  }
  out5.textContent = result;
}
//  Task 6
// Кнопка .b-6 запускає функцію fn6. Функція повинна виводити в .out-6 рядок вигляду:
//
// ******<br>
// ******<br>
// ******<br>
//
// Завдання вирішується за допомогою циклу. В кожній ітерації цикл виводить 6 зірочок. Перенесення рядка - br. Кількість рядків (ітерацій, повторень) циклу вводить користувач в i-6.
//
const b6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const i6 = document.querySelector(".i-6");

b6.onclick = fn6;
function fn6() {
  let result = "";
  for (let i = 1; i <= i6.value; i++) {
    result += `******<br>`;
  }
  out6.innerHTML = result;
}

//  Task 7
// Є input .i-7, куди користувач може ввести число більше нуля (перевірок не робимо, приймаємо як факт).
// Після натискання кнопки .b-7 повинна запускатися функція fn7, яка виводить в .out-7 числа від введеного користувачем до нуля включно.
// Роздільник - знак підкреслення. Якщо користувач ввів 4 і натиснув кнопку, ми отримаємо:
// 4_3_2_1_0_
// Завдання вирішується за допомогою циклу.
const b7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");
const i7 = document.querySelector(".i-7");

b7.onclick = fn7;
function fn7() {
  let result = "";
  const num = +i7.value;
  for (let i = num; 0 <= i; i--) {
    result += `${i}_`;
  }
  out7.textContent = result;
}

//  Task 8
// Є input .i-81 та .i-82, куди користувач може ввести числа більше нуля (перевірок не робимо, приймаємо як факт).
// Вважаємо, що друге число завжди більше першого.
// Після натискання кнопки .b-8 повинна запускатися функція fn8, яка виводить в .out-8 числа від першого введеного до другого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
//  4_5_6_7_8_
// Завдання вирішується за допомогою циклу.
const b8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const i81 = document.querySelector(".i-81");
const i82 = document.querySelector(".i-82");

b8.onclick = fn8;
function fn8() {
  let result = "";
  const num1 = +i81.value;
  const num2 = +i82.value;
  for (let i = num1; i <= num2; i++) {
    result += `${i}_`;
  }
  out8.textContent = result;
}

//  Task 9
// Є input .i-91 та .i-92, куди користувач може ввести числа.
// Після натискання кнопки .b-9 повинна запускатися функція fn9, яка виводить в .out-9 числа від меншого введеного до більшого включно, з кроком 1.
// Роздільник - підкреслення. Якщо користувач ввів 4 і 8 і натиснув кнопку, ми отримаємо:
// 4_5_6_7_8_
// якщо ввів 8 і 6, то отримаємо
// 6_7_8_
// Завдання вирішується за допомогою циклу. Підказка - спочатку робимо перевірку, а потім запускаємо цикл.
// цикл - один
const b9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const i91 = document.querySelector(".i-91");
const i92 = document.querySelector(".i-92");

b9.onclick = fn9;

function fn9() {
  const num1 = +i91.value;
  const num2 = +i92.value;
  let result = "";
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    result += `${i}_`;
  }
  out9.textContent = result;
}

//  Task 10
// Кнопка .b-10 запускає функцію fn10. Функція повинна виводити в .out-10 парні роки від 1950 до 1970 включно.
// Роздільник - знак підкреслення. Завдання вирішується через цикл, а парність - через крок (рівний 2).
const b10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");

b10.onclick = fn10;

function fn10() {
  let result = "";
  for (let i = 1950; i <= 1970; i += 2) {
    result += `${i}_`;
  }
  out10.textContent = result;
}

//  Task 11
// Кнопка .b-11 запускає функцію fn11. Функція повинна:
// - отримати всі div.div-11 у змінну divs11
// - перебрати їх за допомогою циклу. Звернення до div виглядає так: divs[i].innerHTML
// - вивести в .out-11 вміст кожного блоку. Роздільник - знак підкреслення.
// В результаті повинно вийти так:
//     one_3_4_two_
const b11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
b11.onclick = fn11;

function fn11() {
  let result = "";
  let divs11 = document.querySelectorAll(".div-11");
  for (let i = 0; i < divs11.length; i++) {
    result += divs11[i].innerHTML + "_";
  }
  out11.textContent = result;
}

//  Task 12
// Кнопка .b-12 запускає функцію fn12. Функція повинна:
// - отримати всі div.div-12
// - перебрати їх за допомогою циклу. Звернення до div виглядає так: elem[i]
// - застосувати до кожного elem[i].style.background = ‘orange’

const b12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");
b12.onclick = fn12;

function fn12() {
  let elem = document.querySelectorAll(".div-12");
  for (let i = 0; i < elem.length; i++) {
    elem[i].style.background = "orange";
  }
}

//  Task 13
// За допомогою циклу привласніть всім input .i-13 value рівне:
// - для першого  1
// - для другого  2
// - для третього 3
const b13 = document.querySelector(".b-13");

b13.onclick = fn13;

function fn13() {
  let inp = document.querySelectorAll(".i-13");
  for (let i = 1; i <= inp.length; i++) {
    inp[i - 1].value = i;
  }
}
//  Task 14
// Кнопка .b-14 запускає функцію fn14. Функція повинна:
// - отримати всі input.i-14
// - перебрати їх за допомогою циклу. Звернення до елемента виглядає так: elem[i]
// - вивести в .out-14 value вибраного input
// Перевірити, чи вибраний елемент, можна за допомогою elem[i].checked.
const b14 = document.querySelector(".b-14");
const out14 = document.querySelector(".out-14");
b14.onclick = fn14;

function fn14() {
  let elem = document.querySelectorAll(".i-14");
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].checked) {
      out14.textContent = elem[i].value;
    }
  }
}

//  Task 15
// Кнопка .b-15 запускає функцію fn15. Функція повинна виводити наступну послідовність в .out-15:
// 10_0_9_1_8_2_7_3_6_4_5_5_4_6_3_7_2_8_1_9_0_10_
// Підказка (10 - i) + '_' + i + '_';
const b15 = document.querySelector(".b-15");
const out15 = document.querySelector(".out-15");
b15.onclick = fn15;

function fn15() {
  let result = "";
  for (let i = 0; i <= 10; i++) {
    result += 10 - i + "_" + i + "_";
  }
  out15.textContent = result;
}
