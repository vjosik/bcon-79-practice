//  Task 1
// const goods = new Goods('apple', 23.5);
// console.log(goods);

//  Task 2
// const goods = new Goods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400
// );
// console.log(goods);
//  Task 3
// const goods = new Goods('apple', 23.5, 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg', 400 );
// console.log(goods);
// // І тепер виведемо на сторінку
// document.querySelector('.out-3').append(goods.draw());
//  Task 4
// const goods = new Goods(
//   "orange",
//   24,
//   "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg?w=1155&h=1444",
//   450
// );
// console.log(goods);
// document.querySelector(".out-4").append(goods.draw());
//  Task 5
// const goods = new InheriteGoods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400
// );
// console.log(goods);

//  Task 6

//  Task 7
// const goods = new InheriteGoods(
//   "apple",
//   23.5,
//   "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png",
//   400,
//   true
// );
// console.log(goods);
// І тепер виведемо на сторінку
// document.querySelector(".out-7").append(goods.draw());
//  Task 8
const valid = new Valid("account@gmail.com", "123456Q");
console.log(valid);
//  Task 9

//  Task 10
// const firstAccount = new Valid("test@ua.ua", "qwertyu");
// console.log(firstAccount.validate());
// console.log(firstAccount.isValid);

// const secondAccout = new Valid("test@ua.ua", "qwe");
// console.log(secondAccout.validate());
// console.log(secondAccout.isValid);
//  Task 11

//  Task 12
const account1 = new ExtendedValid("test@ua.ua", "qwertyu");
console.log(account1.validate());
console.log(account1.isValid);
console.log(account1.error_message);

const account2 = new ExtendedValid("test@ua.ua", "qwe");
console.log(account2.validate());
console.log(account2.isValid);
console.log(account2.error_message);

const account3 = new ExtendedValid("", "qwertyu");
console.log(account3.validate());
console.log(account3.isValid);
console.log(account3.error_message);
