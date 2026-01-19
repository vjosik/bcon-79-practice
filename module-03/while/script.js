// Task 1
document.querySelector(".b-1").onclick = fn1;
function fn1() {
  let i = 1;
  let result = "";
  while (i <= 50) {
    result += `${i}_`;
    i++;
  }
  document.querySelector(".out-1").textContent = result;
}
// Task 2
document.querySelector(".b-2").onclick = fn2;
function fn2() {
  let i = 2;
  let result = "";
  while (i <= 46) {
    result += `${i}_`;
    i += 2;
  }
  document.querySelector(".out-2").textContent = result;
}
// Task 3
document.querySelector(".b-3").onclick = fn3;
function fn3() {
  let i = 25;
  let result = "";
  while (i >= 7) {
    result += `${i}_`;
    i--;
  }
  document.querySelector(".out-3").textContent = result;
}
// Task 4
document.querySelector(".b-4").onclick = fn4;
function fn4() {
  let i = 77;
  let result = "";
  while (i >= 35) {
    result += `${i}_`;
    i -= 3;
  }
  document.querySelector(".out-4").textContent = result;
}
// Task 5
document.querySelector(".b-5").onclick = fn5;
function fn5() {
  let i = 1;
  let result = "";
  while (i <= 17) {
    if (i % 2 === 0) {
      result += `${i}_**`;
    } else {
      result += `${i}_*`;
    }

    i++;
  }
  document.querySelector(".out-5").textContent = result;
}
// Task 6
document.querySelector(".b-6").onclick = fn6;
function fn6() {
  let i = 0;
  let result = "";
  while (i < 3) {
    result += "******<br>";

    i++;
  }
  document.querySelector(".out-6").innerHTML = result;
}
// Task 7
document.querySelector(".b-7").onclick = fn7;
function fn7() {
  let i = document.querySelector(".i-7").value;
  let result = "";
  while (i >= 0) {
    result += `${i}_`;
    i--;
  }
  document.querySelector(".out-7").textContent = result;
}
// Task 8
document.querySelector(".b-8").onclick = fn8;
function fn8() {
  let i = document.querySelector(".i-81").value;
  let i2 = document.querySelector(".i-82").value;
  let result = "";
  while (i <= i2) {
    result += `${i}_`;
    i++;
  }
  document.querySelector(".out-8").textContent = result;
}
// Task 9
document.querySelector(".b-9").onclick = fn9;
function fn9() {
  let max = Math.max(
    document.querySelector(".i-91").value,
    document.querySelector(".i-92").value
  );
  let min = Math.min(
    document.querySelector(".i-91").value,
    document.querySelector(".i-92").value
  );

  let result = "";
  while (min <= max) {
    result += `${min}_`;
    min++;
  }
  document.querySelector(".out-9").textContent = result;
}
// Task 10
document.querySelector(".b-10").onclick = fn10;
function fn10() {
  let i = 1950;
  let result = "";
  while (i <= 1966) {
    result += `${i}_`;
    i += 2;
  }
  document.querySelector(".out-10").textContent = result;
}
// Task 11
document.querySelector(".b-11").onclick = fn11;
function fn11() {
  const divs11 = document.querySelectorAll(".div-11");
  let result = "";
  let i = 0;

  while (i < divs11.length) {
    result += `${divs11[i].innerHTML}_`;
    i++;
  }
  document.querySelector(".out-11").textContent = result;
}
// Task 12
document.querySelector(".b-12").onclick = fn12;
function fn12() {
  const divs12 = document.querySelectorAll(".div-12");
  let result = "";
  let i = 0;

  while (i < divs12.length) {
    divs12[i].style.background = "orange";
    i++;
  }
  document.querySelector(".out-12").textContent = result;
}
// Task 13
document.querySelector(".b-13").onclick = fn13;
function fn13() {
  const elem = document.querySelectorAll(".i-13");
  let result = "";
  let i = 0;

  while (i < elem.length) {
    elem[i].value = i + 1;
    i++;
  }
  document.querySelector(".out-13").textContent = result;
}
// Task 14
document.querySelector(".b-14").onclick = fn14;

function fn14() {
  const elem = document.querySelectorAll(".i-14");
  let i = 0;
  let result = "";

  while (i < elem.length) {
    if (elem[i].checked) {
      result = elem[i].value;
    }
    i++;
  }

  document.querySelector(".out-14").textContent = result;
}
// Task 15
document.querySelector(".b-15").onclick = fn15;

function fn15() {
  let out15 = document.querySelector(".out-15");
  let result = "";
  let i = 0;

  while (i < 3) {
    result += "77_88_99_";
    i++;
  }

  out15.textContent = result;
}
