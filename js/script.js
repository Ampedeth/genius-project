document.body.style.background = 'pink';

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
//     ocupation: "Soft Engenner",
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

//------------------------------//
//------------------------------//

// function wordSearch(query, seq){
//     //your code here
//     let res = [];
//     for (let i = 0; i < seq.length; i++){
//       const char = seq[i];
//       if (char.toLowerCase().includes(query.toLowerCase())){
//         res.push(char);
//       }
//     }
//     if (res.length > 0){
//         return console.log(res);
//     } else{
//         return console.log(["Empty"]);
//     }
    
//   }
// MyArray = ["dad", "adad", "potada", "dsada", "jkj"];
// wordSearch("ad", MyArray);

//------------------------------//
//------------------------------//

// class CircleBox {
//     constructor(selector){
//         this.$el = document.querySelector(selector);
//     }

//     hide(){
//         this.$el.style.display = "none";
//     }

//     show(){
//         this.$el.style.display = "block";}
// }

// class CircleItem extends CircleBox{
//     constructor(options){
//         super(options.selector)
//         this.$el.style.width = options.size + "px";
//         this.$el.style.height = options.size + "px";
//         this.$el.style.borderRadius = "50%";
//         this.$el.style.background = options.color;

//     }
// }

// const CircleRed = new CircleItem({
//     selector: "#circleRed",
//     color: "red",
//     size: 50,
// });
// const CircleBlue = new CircleItem({
//     selector: "#circleBlue",
//     color: "blue",
//     size: 25,
// });
// const CircleOrange = new CircleItem({
//     selector: "#circleOrange",
//     color: "orange",
//     size: 70,
// });

//------------------------------//
//------------------------------//

// function Car(name, color){
//     this.name = name;
//     this.color = color;
// }

// Car.prototype.message =function(){
//     console.log(`${this.name}'s color is ${this.color}`)
// }

// const BMW = new Car('bmw', 'red');
// const opel = new Car("opel", "white");

//------------------------------//
//------------------------------//

// let message ={
//     messageHello(){
//         console.log(`Hello, ${this.name}`);
//     },
//     messageBye(){
//         console.log(`Bye, ${this.name}`);
//     },
// };
// class User {
//     constructor(name){
//         this.name = name;
//     };
// }
// Object.assign(User.prototype, message);

// new User("Ivan").messageHello();

//------------------------------//
//------------------------------//

// function Calculator(){
//     this.number1 = 0;
//     this.number2 = 0;

//     this.read = function(){
//          this.number1 = Number(prompt('Type first number'));
//          this.number2 = Number(prompt('Type second number'));
//     };

//     this.sum = function(){
//         let sumRes = this.number1 + this.number2;
//         console.log(sumRes);
//         return sumRes;
//     };
    
//     this.mul = function(){
//         return this.number1 * this.number2;
//     };
// }
// const MyCalculator = new Calculator();
// MyCalculator.read();
// console.log(`Summ: ${MyCalculator.sum()}`);
// console.log(`Multiply: ${MyCalculator.mul()}`);


//------------------------------//
//------------------------------//

//*******************************//
//DOM stuff
//*******************************//

// create div
const div = document.createElement("div");
div.classList.add('wrapper');
const body = document.querySelector('body');
body.appendChild(div);
//------------------------------//
// create tittle H1"DOM..."
const header = document.createElement('h1');
header.textContent = "DOM (Document Object Model)";
div.insertAdjacentElement('beforebegin', header);
//------------------------------//
//create list <ul></ul>
const ul = `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>`;
div.innerHTML = ul;
//------------------------------//
//create picture
const img = document.createElement('img');
img.src = 'https://picsum.photos/240';
img.width = 240;
img.classList.add('super');
img.alt = 'Super Man'
div.appendChild(img);
//------------------------------//
//using HTML line, create div with class 'pDiv' + with 2 paragraph
const elemHTML = `
<div class='pDiv'>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
</div>`
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML)

const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
pDiv.children[0].remove(); 
//------------------------------//
// create function generateAutoCard, which get 3 arguments: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return`
    <div class="autoCard">
    <h2>${brand.toUpperCase()} ${year}</h2>
    <p>Auto ${brand.toUpperCase()} - ${year}. Auto's age - ${curYear - year}</p>
    <p>Color is: ${color}</p>
    <button type='button' class='btn'>delete</button>
    </div>
    `;
}
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

const carsList = [
    {brand: 'Tesla', year: 2015, color: 'red'},
    {brand: 'Lexus', year: 2016, color: 'silver'},
    {brand: 'Nissan', year: 2012, color: 'black'},
]

const carsHTML =  carsList.map(car=> {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');

carsDiv.innerHTML = carsHTML;
div.insertAdjacentElement('beforebegin', carsDiv);

const buttons = document.querySelectorAll('.btn');
function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
}
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})