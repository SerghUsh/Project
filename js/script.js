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