// Task 1
document.querySelector(".b-1").onclick = function () {
  let result = "";
  for (let i = 0; i < 3; i++) {
    if (i > 0) {
      result += "_";
    }
    for (let y = 0; y < 1; y++) {
      result += "***";
    }
  }
  document.querySelector(".out-1").textContent = result;
};

// Task 2
document.querySelector(".b-2").onclick = function () {
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += `${i + 1}<br>`;
    for (let y = 0; y < 3; y++) {
      result += "*_";
    }
    result += `<br>`;
  }
  document.querySelector(".out-2").innerHTML = result;
};
// Task 3
document.querySelector(".b-3").onclick = function () {
  let result = "";
  for (let i = 0; i <= 3; i++) {
    for (let y = 0; y < 3; y++) {
      result += "*_";
    }
    result += `<br>`;
  }
  document.querySelector(".out-3").innerHTML = result;
};

// Task 4
document.querySelector(".b-4").onclick = function () {
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += `${i + 1}_ `;
    for (let y = 1; y <= 5; y++) {
      result += `${y}*`;
    }
    result += ` `;
  }
  document.querySelector(".out-4").textContent = result;
};
// Task 5
document.querySelector(".b-5").onclick = function () {
  let result = "";
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k <= 5; k++) {
      result += `${k % 2 === 0 ? 1 : 0}`;
    }
    result += `<br>`;
  }
  document.querySelector(".out-5").innerHTML = result;
};

// Task 6
document.querySelector(".b-6").onclick = function () {
  let result = "";
  for (let i = 0; i < 3; i++) {
    for (let k = 1; k <= 6; k++) {
      result += `${k % 3 === 0 ? "x" : k % 2 === 0 ? 0 : 1}`;
    }
    result += `<br>`;
  }
  document.querySelector(".out-6").innerHTML = result;
};

// Task 7
document.querySelector(".b-7").onclick = function () {
  let result = "";
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k <= i; k++) {
      result += `*`;
    }
    result += `<br>`;
  }
  document.querySelector(".out-7").innerHTML = result;
};
// Task 8
document.querySelector(".b-8").onclick = function () {
  let result = "";
  for (let i = 4; i >= 0; i--) {
    for (let k = 0; k <= i; k++) {
      result += `*`;
    }
    result += `<br>`;
  }
  document.querySelector(".out-8").innerHTML = result;
};
// Task 9
document.querySelector(".b-9").onclick = function () {
  let result = "";
  for (let i = 0; i < 5; i++) {
    for (let k = 0; k <= i; k++) {
      result += `${k + 1}_`;
    }
    result += `<br>`;
  }
  document.querySelector(".out-9").innerHTML = result;
};
// Task 10
document.querySelector(".b-10").onclick = function () {
  let result = "";

  for (let i = 0; i < 5; i++) {
    for (let k = 1; k <= 10; k++) {
      let num = i * 10 + k;
      result += num < 10 ? `0${num}_` : `${num}_`;
    }
    result += "<br>";
  }

  document.querySelector(".out-10").innerHTML = result;
};
