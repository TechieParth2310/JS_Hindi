// =============================================
// 🔥 JAVASCRIPT OBJECTS — COMPLETE DETAILED NOTES
// =============================================


// =================== OBJECT CREATION ===================

// 1️⃣ Object banane ke 2 tareeke hote hain 👇

// const tinderUser = new Object()
// ↑ ye syntax ek "singleton object" banata hai (constructor se banaya gaya)

// ✅ Ye zyada common aur simple syntax hai:
const tinderUser = {}  // Object literal syntax

// Ab hum keys aur values dynamically add kar sakte hain:
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// 🧾 Output:
// { id: '123abc', name: 'Sammy', isLoggedIn: false }


// =================== NESTED OBJECTS ===================

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Nested objects me andar ke data ko dot (.) operator se access karte hain 👇
// console.log(regularUser.fullname.userfullname.firstname);
// 🧾 Output:
// hitesh


// =================== OBJECT MERGING ===================

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// ❌ Ye galat tareeka hai — ye object ke andar object daal deta hai
// const obj3 = { obj1, obj2 }
// 🧾 Output: { obj1: {1: 'a', 2: 'b'}, obj2: {3: 'a', 4: 'b'} }

// ✅ Correct Way #1 — Using Object.assign()
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// 🧾 Output: {1: 'a', 2: 'b', 3: 'a', 4: 'b', 5: 'a', 6: 'b'}

// ✅ Correct Way #2 — Using Spread Operator (Modern way)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);
// 🧾 Output:
// {1: 'a', 2: 'b', 3: 'a', 4: 'b'}


// =================== ARRAY OF OBJECTS ===================

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

// users[1].email  // second user ka email access kar rahe hain
// console.log(users[1].email);
// 🧾 Output:
// h2@gmail.com


// =================== OBJECT METHODS ===================

// Object.keys() → saare keys ko array me return karta hai
// console.log(Object.keys(tinderUser));
// 🧾 Output:
// ['id', 'name', 'isLoggedIn']

// Object.values() → saare values ko array me return karta hai
// console.log(Object.values(tinderUser));
// 🧾 Output:
// ['123abc', 'Sammy', false]

// Object.entries() → key-value pairs ko array ke andar array ke form me deta hai
// console.log(Object.entries(tinderUser));
// 🧾 Output:
// [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// hasOwnProperty() → check karta hai ki property object me exist karti hai ya nahi
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// 🧾 Output:
// true


// =================== OBJECT DESTRUCTURING ===================

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Normal access: course.courseInstructor
// Lekin destructuring se hum direct variable bana sakte hain 👇
const { courseInstructor: instructor } = course

// console.log(courseInstructor);  // ❌ Error: courseInstructor is not defined
console.log(instructor);
// 🧾 Output:
// hitesh


// =================== JSON FORMAT (API Representation) ===================

// JSON ka matlab hai JavaScript Object Notation
// Ye mainly APIs ke data exchange ke liye use hota hai
// Difference ye hai ki JSON me keys & values dono double quotes ("") me likhte hain

/*
🧾 Example JSON:

{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

Note:
- JSON objects me keys strings hoti hain
- JSON file me comments allowed nahi hote
*/


// =================== EMPTY OBJECTS IN ARRAY ===================

// Yeh mostly placeholder ya default structure ke liye use hota hai 👇
[
    {},
    {},
    {}
]
// 🧾 Output:
// Array with 3 empty objects
 