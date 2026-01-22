// Task 1
const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

document.querySelector(".b-1").onclick = fn1;
function fn1() {
  document.querySelector(".out-1").textContent = obj1["two"];
}
// Task 2
const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};
document.querySelector(".b-2").onclick = fn2;
function fn2() {
  document.querySelector(".out-2").textContent = obj2["five"];
}
// Task 3
const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
document.querySelector(".b-3").onclick = fn3;

function fn3() {
  let result = "";
  for (const key in obj3) {
    if (obj3[key] === "hi") {
      result += `-${obj3[key]}`;
    }
  }
  document.querySelector(".out-3").textContent = result;
}

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};
document.querySelector(".b-4").onclick = fn4;
function fn4() {
  let result = "";

  for (const key in obj4) {
    console.log(key);
    result += `${key}—${obj4[key]} <br>`;
  }
  document.querySelector(".out-4").innerHTML = result;
}
// Task 5
const obj5 = {
  one: 1,
  two: 2,
};
const out5 = document.querySelector(".out-5");
document.querySelector(".b-5").onclick = function () {
  fn5(obj5, out5);
};
function fn5(object, selector) {
  let res = "";
  for (const key in object) {
    res += `${key} ${object[key]} <br>`;
  }
  selector.innerHTML = res;
}

// Task 6

const obj6 = {
  b: 17,
  e: 22,
};
const i61 = document.querySelector(".i-61");
const i62 = document.querySelector(".i-62");
const out6 = document.querySelector(".out-6");
document.querySelector(".b-6").onclick = fn6;
function fn6() {
  // let keys = i61.value;
  obj6[i61.value] = i62.value;
  fn5(obj6, out6);
}
// Task 7
const obj7 = {
  b: 17,
  e: 22,
};

const i7 = document.querySelector(".i-7");
const out7 = document.querySelector(".out-7");
document.querySelector(".b-7").onclick = fn7;
function fn7() {
  let test = i7.value;
  // for (const key in obj7) {
  //   if (key === test) {
  //     return (out7.textContent = 1);
  //   } else {
  //     out7.textContent = 0;
  //   }
  // }
  out7.textContent = test in obj7 ? 1 : 0;
}

// Task 8
const i8 = document.querySelector(".i-8");
const out8 = document.querySelector(".out-8");
const obj8 = {
  b: 17,
  e: 22,
};

document.querySelector(".b-8").onclick = fn8;
function fn8() {
  let test = i8.value;
  for (const key in obj8) {
    if (key === test) {
      return (out8.textContent = key);
    } else {
      out8.textContent = 0;
    }
  }
}

// Task 9
const i9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
document.querySelector(".b-9").onclick = fn9;
const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};
function fn9() {
  const searchValue = +i9.value;
  let result = "";
  for (const key in obj9) {
    if (obj9[key] === searchValue) {
      result += `${key} `;
    } else {
      result += ` `;
    }
  }
  out9.textContent = result;
}
// Task 10

const out10 = document.querySelector(".out-10");
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};
document.querySelector(".b-10").onclick = document.querySelector(
  ".b-10"
).onclick = function () {
  document.querySelector(".out-10").textContent = fn10(obj10, 22);
};
function fn10(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const i11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");
const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};
document.querySelector(".b-11").onclick = fn11;
function fn11() {
  const value = i11.value;
  // for (const key in obj11) {
  //   if (key === value) {
  //     delete obj11[key];
  //     break;
  //   }
  // }
  delete obj11[value];
  fn5(obj11, out11);
}

// Task 12
const i12 = document.querySelector(".i-12");
const out12 = document.querySelector(".out-12");
const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};
document.querySelector(".b-12").onclick = fn12;
function fn12() {
  const value = +i12.value;
  for (const key in obj12) {
    if (obj12[key] === value) {
      delete obj12[key];
    }
  }

  fn5(obj12, out12);
}

// Task 13
const out13 = document.querySelector(".out-13");
const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
  orange: 6,
};
function fn13() {
  let res = 0;
  for (const key in obj13) {
    const num = Number(obj13[key]);
    if (!Number.isNaN(num)) {
      res += num;
    }
  }
  out13.textContent = res;
}
document.querySelector(".b-13").onclick = fn13;
// Task 14
const out14 = document.querySelector(".out-14");
document.querySelector(".b-14").onclick = fn14;
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

function fn14() {
  let res = "";
  for (const key in obj14) {
    const arr = obj14[key];
    console.log(arr);
    res += `${arr[0]} `;
  }
  out14.textContent = res;
}
// Task 15
const out15 = document.querySelector(".out-15");
document.querySelector(".b-15").onclick = fn15;
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};
function fn15() {
  let res = "";
  for (const key in obj15) {
    const arr = obj15[key];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      res += `${arr[i]} `;
    }
  }
  out15.textContent = res;
}
// Task 16
const out16 = document.querySelector(".out-16");
document.querySelector(".b-16").onclick = fn16;
const obj16 = {
  iis8sj: {
    name: "Ivan",
    age: 27,
  },
  iiss7j: {
    name: "Petr",
    age: 26,
  },
  s3s8sj: {
    name: "Serg",
    age: 47,
  },
};
function fn16() {
  let res = "";
  for (const keyObj in obj16) {
    // const keys = obj16[keyObj]; //записываем вложенные обьекты в переменную

    // for (const keyName in keys) {
    //   if (keyName === "name") {
    //     res += `${keys[keyName]} `;
    //   }
    // }
    res += obj16[keyObj].name + " ";
  }
  out16.textContent = res;
}
// Task 17
const out17 = document.querySelector(".out-17");
document.querySelector(".b-17").onclick = fn17;
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: "37",
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};
function fn17() {
  let res = "";
  for (const keyObj in obj17) {
    const age = Number(obj17[keyObj].age);
    if (age > 30) res += obj17[keyObj].name + " ";
  }
  out17.textContent = res;
}
// Task 18
const out18 = document.querySelector(".out-18");
document.querySelector(".b-18").onclick = fn18;
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};
function fn18() {
  let res = "";
  const i18 = document.querySelector(".i-18").value;

  for (const keyObj in obj18) {
    console.log("🚀 ~ fn18 ~ keyObj:", keyObj);

    if (keyObj === i18) {
      const arr = obj18[keyObj];
      for (let i = 0; i < arr.length; i++) {
        if (i > arr.length - 2) {
          res += `${arr[i]} - last station`;
        } else {
          res += `${arr[i]}➡️`;
        }
      }
      break;
    } else {
      res = "Doesn`t exist";
    }
  }
  out18.textContent = res;
}

// Task 19
const out19 = document.querySelector(".out-19");
document.querySelector(".b-19").onclick = fn19;
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};
function fn19() {
  let res = "";
  const i19 = document.querySelector(".i-19").value.toLowerCase();

  for (const keyObj in obj19) {
    const arr = obj19[keyObj];
    console.log("🚀 ~ fn19 ~ arr:", arr);
    for (const station of arr) {
      if (station.toLowerCase() === i19) {
        out19.textContent = keyObj;
        return;
      }
    }
  }
  out19.textContent = "Doesn`t exist";
}
// Task 20
const out20 = document.querySelector(".out-20");
document.querySelector(".b-20").onclick = fn20;
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 2],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
function fn20() {
  let res = "";

  for (const line in obj20) {
    for (const station of obj20[line]) {
      if (station[1] === 2) {
        if (res !== "") {
          res += " ➡️ ";
        }
        res += `${line}: ${station[0]}`;
      }
    }
  }

  out20.textContent = res || "Doesn't exist";
}
