// число
let number = 17;
console.log(typeof number); // вивід number

// рядок
let string = "Hi Sergh";
console.log(typeof string); 


// булеві величини

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
let bigNumber = 1453723823909n;
console.log(typeof bigNumber);

// Null
let empty = null;
console.log(typeof empty);

// Undefined
let notFound = undefined;
console.log(typeof notFound);

// Symbol
let ourSymbol = Symbol("hope");
console.log(typeof ourSymbol);

// Object
let newArray = [1, 2, 3];
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

