// число
let number = 17;
console.log(typeof number); // вивід number

// рядок
let string = "Hi Sergh";
console.log(typeof string); 


// булеві величини

const boolVal = true;
console.log(typeof boolVal);

let x = 21;
let y = 21;

let isBigger = x > y;
let isSmaller = x < y;

if (isBigger) {
        console.log("х більше у");
        }
else if (isSmaller) {
            console.log("x менше у");
        }
else {
        console.log("x дорівнює у");
        }
        
// BigInt
const bigNumber = 1453723823909n;
console.log(typeof bigNumber);

// Null
const empty = null;
console.log(typeof empty);

// Undefined
const notFound = undefined;
console.log(typeof notFound);

// Symbol
const ourSymbol = Symbol("hope");
console.log(typeof ourSymbol);

// Object
const newArray = [1, 2, 3];
console.log(typeof newArray);

// Task 2

/*let name = prompt("Введіть своє ім'я");
let age = prompt("Введіть свій вік");
let height = prompt("Який ви маєте зріст");

let message = `Привіт, мене звати ${name}.
Мені ${age} роки.
А мій зріст ${height} см.`

 alert(message); */

 // Task 3

/*let num1 = prompt("Введіть перше довільне число");
 let num2 = prompt("Введіть друге довільне число");

 num1 = Number(num1);
 num2 = Number(num2);

 let sum = num1 + num2;

 alert("Сума чисел: " + sum)*/

// Task 4

/*const userName = prompt("Enter your name");

if (!userName?.trim()) { // userName === null || userName.trim() === '' => !userName || !userName.trim()
        alert("The entry has been canceled.");
}
else {
        alert(`Hello ${userName}. How are you?`);
}*/

/*
5) отримати від юзера ціле додатнє число. 
якщо юзер ввів ціле додатнє число, то вивести йому "this is a cool number". 
якщо це від'ємне або неціле, то вивести "this is not a cool number". 
якщо юзер ввів взагалі не число, то вивести йому помилку (довільний текст помилки)

6) отримати від юзера 3значне число. 
якщо юзер дійсно ввів ціле додатнє тризначне число, 
то визначити і вивести відповіді на питання:
- Чи всі цифри однакові?
- Чи є серед цифр однакові?
якщо це не ціле додатнє тризначне, то вивести помилку
*/

/*(function task5() {
  const plusNumb = prompt("Введіть ціле додатнє число");

  /*
   null
   ''
   '         '
   'hghdhgdh'
   '53.85'
   '-5'
   '-75.02'
   '5' 
    
   */
/*  if (!plusNumb || !plusNumb.trim() ) {
     alert("Nothing entering");
  }
 else if (isNaN(plusNumb)) {
        alert("Not a number");
 }
 else if (!Number.isInteger(Number(plusNumb)) || Number(plusNumb) <= 0) {
        alert("this is not a cool number");
 }

 else {
        alert("this is a coll number");
 }
})();*/

// Task 6

(function task6() {
let answer = prompt("Введіть тризначне додатнє число:");

if (answer === null) {
   alert("Скасовано користувачем.");
} 
else {
        answer = answer.trim();

        if (/^0/.test(answer) || /099$/.test(answer)) {
                alert("Помилка: потрібно ввести тризначне додатнє ціле число.");
                }
        else if (/^\d{3}$/.test(answer)) {
        
                let [a, b, c] = answer;

                if (a === b && b === c) {
                alert("Всі цифри однакові.");
                } 
                else if (a === b || b === c || a === c) {
                alert("Серед цифр є однакові.");
                } 
                else {
                alert("Всі цифри різні.");
                }
                } 
        
        else {
                alert("Помилка: потрібно ввести тризначне додатнє ціле число.");
                }
}
        
})();


