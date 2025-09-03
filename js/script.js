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

/*(function task6() {
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
        
})();*/

/*let newAnswer = answer.replace("а", "і");
                alert(/^a$/.test(newAnswer));*/

/*(function task7() {
        
        const answer = prompt("Введіть довільне речення");

        if (answer.includes("яблуко")) {
                alert("ммм, щоб про яблука");
        }
        else {
                const newAnswer = answer.replace(/а/g, "і");
                alert(newAnswer);
        }
        
})();*/

// Task 8
/*  const userInput = prompt('What is your name?');
  let userName = userInput?.trim() ? userInput?.trim() : '[noname]';
  /*if (userInput?.trim()) {
    userName = userInput?.trim();
  }
  else {
    userName = '[noname]';
  }*/

  /*alert(`Hello ${userName}`);*/

  // Task 9
  //  переписати код з використанням скорочених операторів:

let a = 3;
a += 3;
a *= 2;
a -=10;
a **= 2;
console.log('Final a is ' + a);


// Task 10

//const userInput = prompt('What is favorite fruit?');

/*if (userInput === 'apple') {
  alert('Cook an apple pie');
}
else if (userInput === 'orange') {
  alert('would you like a fresh juice?');
}
else if (userInput === 'pineapple') {
  alert('Neither pine nor apple');
}
else {
  alert('I don\'t know such a fruit');
}*/

/*switch (userInput) {
        case "apple": 
                userInput === 'apple'
                alert('Cook an apple pie');
                break;
        case "orange": 
                userInput === 'orange';
                alert('would you like a fresh juice?');
                break;
        case "pineapple":
                userInput === 'pineapple';
                alert('Neither pine nor apple');
                break;
        default:
                alert('I don\'t know such a fruit');
}
*/


