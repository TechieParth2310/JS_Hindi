// =================== PRO + INTERVIEW NOTES: "this" & Arrow Functions ===================

// =================== 1️⃣ OBJECT METHOD & 'this' ===================
const user = {
    username: "hitesh",
    price: 999,

    // Object method
    welcomeMessage: function() {
        // 'this' points to the object that invoked this method
        console.log(`${this.username} , welcome to website`);
        console.log(this); 
    }
}

// user.welcomeMessage()
// 🧾 OUTPUT:
// hitesh , welcome to website
// { username: 'hitesh', price: 999, welcomeMessage: [Function] }

// INTERVIEW TIP:
// Q: What does 'this' refer to in an object method?
// A: The object that calls the method.

// Changing property dynamically
// user.username = "sam"
// user.welcomeMessage()
// 🧾 OUTPUT:
// sam , welcome to website
// 'this' still points to the user object

// =================== 2️⃣ GLOBAL SCOPE 'this' ===================

// console.log(this)
// 🧾 OUTPUT:
// Node.js → {} (empty object)
// Browser → Window object
// 🔑 Interview note:
// Q: Why does 'this' differ in Node vs Browser?
// A: 'this' in global scope points to the global object. Node wraps code in a module, so 'this' is {}. Browser global scope → Window.

// =================== 3️⃣ NORMAL FUNCTION 'this' ===================

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

// chai()
// 🧾 OUTPUT: undefined
// 🔑 Interview note:
// - In normal functions, 'this' depends on how function is called.
// - Global call → 'this' = global object. Local variables are NOT part of 'this'.

// =================== 4️⃣ FUNCTION EXPRESSION 'this' ===================

const chaiExp = function () {
    let username = "hitesh"
    console.log(this.username);
}

// chaiExp()
// 🧾 OUTPUT: undefined
// 🔑 Interview tip:
// Function expressions behave like normal functions regarding 'this'.

// =================== 5️⃣ ARROW FUNCTION 'this' ===================

const chaiArrow =  () => {
    let username = "hitesh"
    console.log(this);
}

// chaiArrow()
// 🧾 OUTPUT: {} in Node, Window in Browser
// 🔑 Explanation:
// - Arrow functions do NOT have their own 'this'
// - They inherit 'this' from lexical (outer) scope
// - Common gotcha in interviews: arrow functions inside objects won't bind 'this' to the object

// =================== 6️⃣ ARROW FUNCTION RETURN VARIATIONS ===================

// 6a: Single-line implicit return
const addTwo = (num1, num2) => num1 + num2
// addTwo(3,4) -> 7

// 6b: Return an object implicitly (wrap in parentheses)
const addTwoObj = (num1, num2) => ({ username: "hitesh" })

console.log(addTwoObj(3, 4))
// 🧾 OUTPUT:
// { username: 'hitesh' }
// 🔑 Interview tip:
// Q: How to return an object literal from arrow function?
// A: Wrap object in parentheses, else JS interprets {} as function block

// =================== 7️⃣ ARRAY ITERATION WITH ARROW ===================

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach((num) => console.log(num * 2))
// OUTPUT: 4 10 6 14 16
// 🔑 Interview tip:
// - Arrow function inside forEach inherits 'this' from outer scope

// =================== 8️⃣ INTERVIEW TYPE QUICK QUESTIONS ===================

/*
Q1: What is the difference between function declaration & function expression regarding 'this'?
A1: Declaration: hoisted, can be called before definition; Expression: not hoisted, 'this' depends on call context.

Q2: What is 'this' in global scope in Browser vs Node?
A2: Browser → Window object; Node → {} (module scope)

Q3: How does 'this' behave in arrow functions?
A3: No own 'this'; inherits from lexical scope.

Q4: How to return an object in arrow function?
A4: Wrap the object in parentheses: () => ({ key: value })

Q5: Why does object method 'this' still refer to the object if we change its property?
A5: 'this' always points to the object that calls the method, property values are dynamic.

Q6: Can arrow functions be used as object methods safely?
A6: No, arrow functions don't bind 'this' to the object — usually use normal function for object methods.
*/
