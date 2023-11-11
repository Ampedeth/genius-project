
//------------------------------//
//------------------------------//

// function changeColor(){
//     this.style.background = "red";
// }

// document.querySelector("h1").onclick = changeColor;
// let user = document.querySelectorAll("div");
// user.forEach(function(element){
// element.onclick = changeColor;
// })

//------------------------------//
//------------------------------//

// const user = {
//     name: "",
//     age: undefined,
//     city: "",
//     info: function(){
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`City is ${this.city}`);
//     }
// }

// const Vera = {
//     name: "Vera",
//     age: 18,
//     city: "New Yourk",
// };

// user.info.bind(Vera)();

//------------------------------//
//------------------------------//

// const student = {
//     name: "",
//     ocupation: "",
//     middleMark: undefined,
//     missedLessons: undefined,
//     info: function () {
//         console.log(`Name is ${this.name}`);
//         console.log(`Ocupation is ${this.ocupation}`);
//         console.log("Middlemark is " + this.middleMark);
//         console.log("missedLessons is " + this.missedLessons);
//     },
// };

// const student1 = {
//     name: "Anton",
//     ocupation: "Developer",
//     middleMark: 7,
//     missedLessons: 100,
// };

// const student2 = {
//     name: "Vlad",
//     ocupation: "Taster",
//     middleMark: 8,
//     missedLessons: 7,
// }

// const student3 = {
//     name: "Ivan",
//     ocupation: "Soft Ingenner",
//     middleMark: 10,
//     missedLessons: 3,
// }

// student.info.bind(student1)();
// console.log("");
// student.info.call(student2);
// console.log("");
// student.info.apply(student3);

//------------------------------//
//------------------------------//


// Write two buttons and attach functions to them
// when clicking on the html button - should give a brief definition of what it is
// when clicking on the css button - it should give a short definition of what it is


// const result = {
//     usersChoise() {
//         console.log("at your request: " + this.information);
//     },
// };

// const HTML = {
//     information: ["HTML is HTML what s stupid request"],
// };

// const CSS = {
//     information: ["CSS is CSS what s stupid request"],
// };

// document.querySelector("#html").addEventListener("click", result.usersChoise.bind(HTML));
// document.querySelector("#css").addEventListener("click", result.usersChoise.bind(CSS));

//------------------------------//
//------------------------------//

// Write a store function that receives the name of the product, the price per kg, and the quantity of the product
// the function should return the product name and cost
// check on options:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) Orange 89. 3,4


// const goods = {
//     name: "",
//     cost: undefined,
//     number: undefined,
//     info: function() {
//         console.log(`Name is ${this.name}, costs: ${this.cost}`);
//     },
// };

// const banana = {
//     name: "banana",
//     cost: 4.5,
//     number: 30,
// };

// const cherry = {
//     name: "cherry",
//     cost: 1.3,
//     number: 58,
// };

// const Orange = {
//     name: "jrange",
//     cost: 3.4,
//     number: 89,
// };

// goods.info.bind(banana)();
// goods.info.call(cherry);
// goods.info.apply(Orange);

//------------------------------//
//------------------------------//

// class Bank {
//     constructor(option) {
//         this.summ = option.summ;
//         this.month = option.month
//         this.p = option.p;
//     }
//     credit() {
//         return console.log(this.summ + this.p * this.month);
//     }
// }

// const userBank = new Bank ({
//     summ: 10000,
//     month: 7,
//     p: 700,
// })

// userBank.credit();

//------------------------------//
//------------------------------//

// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні


// class Abonent {
//     constructor(option) {
//         this.name = option.name;
//         this.number = option.number;
//     }

//     set setUserInfo(option) {
//         this.name = option.name;
//         this.number = option.number;
//     }
//     get setUserInfo() {
//         return(`Name is: ${this.name}, phone number is: ${this.number}`);
//     }
// }

// const abonent1 = new Abonent({
//     name: "Antonio",
//     number: "098 808 3523",
// });
// const abonent2 = new Abonent({
//     name: "Vlad",
//     number: "098 567 3243",
// });
// const abonent3 = new Abonent({
//     name: "Money",
//     number: "8 800 555 3535",
// });

// console.log(abonent1);
// console.log(abonent2);
// console.log(abonent3);

//------------------------------//
//------------------------------//

// function neutralise(s1, s2) {
//   // Here be dragons!
//   const result = [];
//   const len = Math.max(s1.length, s2.length);
//   for (let i = 0; i < len; i++){
//     const char1 = s1[i] || "0";
//     const char2 = s2[i] || "0";
    
//     if (char1 === char2){
//       result.push(char1);
//     } else {
//       result.push("0");
//     }
//   }
//   return result.join('');
// }

// console.log(neutralise("++-", "-+-"));

//------------------------------//
//------------------------------//

// const Array = [5, 4, 8, 3];
// let res = 0;
// for (let i = 0; i<4; i++){
//   const char = Array[i];
//   if (char % 2 === 0){
//     res1 = char ** 2;
//     res += res1;
//   }
// }
// console.log(res);

