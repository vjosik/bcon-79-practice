//TODO: Join, Split, ForEach
// Task 1

const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
document.querySelector(".b-1").onclick = fn1;
function fn1() {
  let arr1_res = [];
  arr1.forEach(item => {
    arr1_res.push(item * 2);
  });
  document.querySelector(".out-1").textContent = arr1_res.join(" ");
}

// Task 2
const arr2 = [2, 3, 4, 5, 10, 11, 12];
document.querySelector(".b-2").onclick = fn2;
function fn2() {
  let arr2_res = [];
  arr2.forEach(item => {
    arr2_res.push(item / 2);
  });
  document.querySelector(".out-2").textContent = arr2_res.join(" ");
}

// Task 3
const arr3 = [2, "hello", 3, "hi", 4, "Mazai"];
document.querySelector(".b-3").onclick = fn3;
function fn3() {
  let arr3_res = [];
  arr3.forEach(item => {
    if (!isNaN(item)) {
      arr3_res.push(item);
    }
  });
  document.querySelector(".out-3").textContent = arr3_res.join(" ");
}

// Task 4
const arr4_res = [];

const spans = document.querySelectorAll(".task-4");

function fn4() {
  spans.forEach(item => {
    arr4_res.push(item.getAttribute("data"));
  });
}
fn4();
document.querySelector(".out-4").textContent = arr4_res.join(" ");
// Task 5
const arr5_res = [];
const parag = document.querySelectorAll(".task-5");
parag.forEach(item => {
  item.addEventListener("click", fn5);
});
function fn5(e) {
  arr5_res.push(e.target.getAttribute("data"));
  document.querySelector(".out-5").textContent = arr5_res.join(" ");
}

// Task 6
const str6 = "helloworld";
const out6 = document.querySelector(".out-6");
let arr6_res = [];
// document.querySelector(".b-6").onclick = () => {
//   document.querySelector(".out-6").textContent = [...str6].join(" ");
// };
document.querySelector(".b-6").onclick = () => {
  [...str6].forEach(l => arr6_res.push(l));
  out6.textContent = arr6_res.join(" ");
};

// Task 7
const str7 = "hello world hi mazai";
let arr7_res = [];
document.querySelector(".b-7").onclick = fn7;
function fn7() {
  arr7_res = str7.split(" ");

  document.querySelector(".out-7").textContent = arr7_res.join(" ");
}
// Task 8
const arr8 = [1, 2, 66, 77, 15];
let arr8_res = [];
document.querySelector(".b-8").onclick = () => {
  arr8_res = arr8.join("-");
  document.querySelector(".out-8").textContent = arr8_res;
};

// function fn8() {
//   arr8_res = arr8.join("-");
//   document.querySelector(".out-8").textContent = arr8_res;
// }
// Task 9
const arr9 = [
  ["hi", "mahai"],
  ["test", "best"],
];

const fn9 = () => {
  const arr9_res = arr9.flat().join("-");
  document.querySelector(".out-9").textContent = arr9_res;
};
document.querySelector(".b-9").onclick = fn9;
// Task 10
const arr10 = { name: "ivan", age: 15, sex: 1, id: 45 };
const fn10 = () => {
  const arr10_res = Object.entries(arr10)
    .map(item => item.join("="))
    .join("&");
  document.querySelector(".out-10").textContent = arr10_res;
};
document.querySelector(".b-10").onclick = fn10;
//TODO: MAP FILTER
// Task 11
const arr11 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

document.querySelector(".b-11").onclick = () => {
  const arr11_res = arr11.map(item => item * 2);
  document.querySelector(".out-11").textContent = arr11_res.join(" ");
};
// Task 12
const arr12 = [2, 3, 4, 5, 10, 11, 12];

document.querySelector(".b-12").onclick = () => {
  const arr12_res = arr12.map(item => Math.pow(item, 2));
  document.querySelector(".out-12").textContent = arr12_res.join(" ");
};
// Task 13
const arr13 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

document.querySelector(".b-13").onclick = () => {
  const arr13_res = arr13.map(Number);
  document.querySelector(".out-13").textContent = arr13_res.join(" ");
};
// Task 14
const arr14 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
let arr14_res = [];
document.querySelector(".b-14").onclick = () => {
  arr14_res = arr14.filter(item => typeof item === "number");
  document.querySelector(".out-14").textContent = arr14_res.join(" ");
};
// Task 15
const arr15 = [3, 14, 15, 92, "6"];
let arr15_res = [];
document.querySelector(".b-15").onclick = () => {
  arr15_res = arr15.filter(item => typeof item === "number" && item % 2 === 0);
  document.querySelector(".out-15").textContent = arr15_res.join(" ");
};
// Task 16
const arr16 = [3, 14, 15, 92, "6", "5", "hello", 32];
let arr16_res = [];
document.querySelector(".b-16").onclick = () => {
  arr16_res = arr16.filter(item => Number.isInteger(item) && item > 14);
  document.querySelector(".out-16").textContent = arr16_res.join(" ");
};
// Task 17
const arr17 = [
  "Alto`s Adventure",
  "Angry Birds 2",
  "Anno 2205",
  "Assassin`s Creed Chronicles",
];
let arr17_res = [];
document.querySelector(".b-17").onclick = () => {
  arr17_res = arr17.map(item => item.toLocaleLowerCase());
  document.querySelector(".out-17").textContent = arr17_res.join(" ");
};

// Task 18
const arr18 = [3, 14, 15, 92, 7, 32, 59];
let arr18_res = [];
document.querySelector(".b-18").onclick = () => {
  arr18_res = arr18
    .map((num, i) => {
      if (num % 2 === 0) {
        return i;
      }
    })
    .filter(num => num);
  document.querySelector(".out-18").textContent = arr18_res.join(" ");
};
// const fn18 = () => {
//   out18.textContent = arr18.reduce((acc, item, index) => {
//     if (item % 2 === 0) {
//       acc.push(index);
//     }
//     return acc;
//   }, []);
// };
// Task 19
const arr19 = [
  "Quantum Break",
  "Gears of War 4",
  "Mass Effect: Andromeda",
  "Far Cry Primal",
];
let arr19_res = [];
document.querySelector(".b-19").onclick = () => {
  // arr19.forEach((elem, index, arr) => {
  //   arr[index] = elem.toLowerCase();
  // });
  const res = arr19.join("").toLowerCase().split(",");
  // document.querySelector(".out-19").textContent = arr19.join(" ");
  document.querySelector(".out-19").textContent = res;
};
// Task 20
const arr20 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
document.querySelector(".b-20").onclick = () => {
  arr20.forEach((num, index, array) => {
    if (num < 0) {
      array[index] = 0;
    }
  });
  document.querySelector(".out-20").textContent = arr20;
};

// Task 21
const arr21 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
document.querySelector(".b-21").onclick = () => {
  const arr21_res = arr21.filter((num, index) => index % 2 === 0);

  document.querySelector(".out-21").textContent = arr21_res.join(" ");
};

// Task 22
const arr22 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
document.querySelector(".b-22").onclick = () => {
  document.querySelector(".out-22").textContent = Array.isArray(arr22);
};
// Task 23
const arr23 = [2, 13, 14, -7, 9, 5, 0, -2, 14];
const arr23_num = 9;
document.querySelector(".b-23").onclick = () => {
  document.querySelector(".out-23").textContent = arr23.includes(arr23_num);
};
// Task 24
const arr24 = ["c", "C", "d", "e", "E"];
const arr14_sum = "k";
document.querySelector(".b-24").onclick = () => {
  document.querySelector(".out-24").textContent = arr24
    .join("")
    .toLowerCase()
    .includes(arr14_sum.toLowerCase());
};
// Task 25
const arr25 = [
  {
    name: "Mango",
    pnum: "tr7862",
  },
  {
    name: "Poly",
    pnum: "",
  },
  {
    name: "Ajax",
    pnum: "im7961",
  },
  {
    name: "Didi",
    pnum: "tr786259",
  },
];
let arr25_res = " ";
document.querySelector(".b-25").onclick = () => {
  arr25
    .filter(item => item.pnum.length === 6)
    .forEach((index, number, array) => {
      arr25_res += `${index.name}: ${index.pnum} <br>`;
    });
  // let res = "";
  // arr25_res.forEach((index, number, array) => {
  //   arr25_res += `${index.name}: ${index.pnum}\n`;
  // });
  console.log("🚀 ~ arr25_res:", arr25_res);

  document.querySelector(".out-25").innerHTML = arr25_res;
};

//? RESULT:
// [
//   {
//     name: "Mango",
//     pnum: "tr7862",
//   },
//   {
//     name: "Ajax",
//     pnum: "im7961",
//   },
// ];
