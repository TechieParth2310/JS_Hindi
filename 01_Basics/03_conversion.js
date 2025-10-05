let score = "33abc"


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)); // it will still show type as number
console.log(valueInNumber);  // output will be Nan

// 33=>33
// 33abc => Nan
// true =>1; false=>0
// null => 0
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1->true;
// 0-> false ;
// "" => false;
// "Hitesh" =>true;

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 🔄 Type Conversion & Coercion in JavaScript

// 🧠 Type Conversion (Explicit)
    // Done manually using functions
    // Number("123") → 123
    // String(123)   → "123"
    // Boolean(1)    → true

// ⚙️ Type Coercion (Implicit)
    // JS automatically converts types during operations
    // "5" + 2   → "52"   (number → string)
    // "5" - 2   → 3      (string → number)
    // true + 1  → 2
    // false == 0 → true
    // "" == 0    → true

// ⚠️ null & undefined
    // null == undefined → true
    // null === undefined → false
    // null >= 0 → true  (converted to 0)
    // null > 0  → false
    // undefined with numbers → always NaN


