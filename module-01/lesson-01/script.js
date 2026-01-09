//1
const myName = "Igor";
console.log(myName);

//2

const month = 4;
console.log(month);

//3
const firstText = "Ласкаво";
const secondText = "просимо";
const thirdText = "на курс";
const space = " ";
console.log(firstText + space + secondText + space + thirdText);

//4
//alert(2019);

//6
document.getElementById("six").textContent = "Hello World";

//7
document.getElementById("seven").textContent = 12 * 12;

//8
document.querySelector(".out-8").textContent = "task-8";

//9
document.querySelector("span.out-8").textContent = "world";

//10
document.querySelector(".out-10").innerHTML = "<h2>Hi</h2>";

//11
const out11 = document.querySelector(".out-11");

out11.innerHTML = "123";
out11.innerHTML += "456";

//12

const a = document.querySelector(".out-12");

a.innerHTML = 3.1415;

//13

const out13 = document.querySelector(".out-13");

out13.innerHTML =
  '<img src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a" alt="js" width="400">';

//14

const z1 = 6;
const z2 = 3;
const out14 = document.querySelector(".out-14");

out14.innerHTML = z1 * z2;

//15
const y1 = 6;
const y2 = 3;
const out15 = document.querySelector(".out-15");

out15.innerHTML = y1 / y2;

//16

const x1='Hello';
const x2 = 5;
const out16 = document.querySelector(".out-16");

out16.innerHTML = x1 + x2;

//17
const out17 = document.querySelector(".out-17");
console.log("🚀 ~ out17:", out17.textContent);

//18
let out18 = document.querySelector(".out-18");
console.log("🚀 ~ out18:", out18.textContent)

out18 = 5; 
console.log("🚀 ~ out18:", out18)

//19
let out19 = document.querySelector(".out-19");
out19 = document.querySelector(".out-19-test");
console.log("🚀 ~ out19:", out19)

//20

let out20 = document.querySelector(".out-20");
out20.textContent = '<h2>Hi</h2>';