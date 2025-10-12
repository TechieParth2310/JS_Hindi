// ⚡️ FOR LOOP IN JAVASCRIPT ⚡️

// Syntax: 
// for (initialization; condition; increment/decrement) { ... }

// Example 1️⃣: Basic For Loop
for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        //console.log("5 is best number");
    }

    //console.log(element);
}

// 💡 'let i = 0' -> loop start hone se pehle ek variable banata hai
// 💡 'i <= 10'  -> ye condition har iteration ke baad check hoti hai
// 💡 'i++'      -> har baar i ki value +1 hoti jaati hai
// ✅ Output (agar uncomment karein): 0 se 10 tak ke numbers print honge

// ❌ console.log(element); (outside loop) => error dega
// kyunki 'element' ka scope sirf loop ke andar valid hai (block scoped)


// ⚙️ NESTED FOR LOOP
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i * j);
    }
}

// 💡 Nested loops ka use tables, matrix, patterns banane ke liye hota hai
// ✅ Example: Multiplication Table (agar inner loop console log uncomment karein)


// ⚡️ LOOPING THROUGH ARRAYS
let myArray = ["flash", "batman", "superman"]

//console.log(myArray.length); // 👉 Output: 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// ✅ Output: flash, batman, superman
// 💡 Tip: Array ke saare elements iterate karne ke liye perfect use-case


// ⚔️ BREAK & CONTINUE STATEMENTS

// 🔴 BREAK → loop ko turant rok deta hai (exit karta hai)
// Example 👇
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }
// ✅ Output: 1,2,3,4, "Detected 5" (aur loop wahin ruk jaata hai)


// 🟢 CONTINUE → current iteration skip karta hai, loop chalu rehta hai
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}

// ✅ Output: 1,2,3,4, "Detected 5", 6...20
// 💡 Continue sirf us iteration ko skip karta hai jahan condition true hoti hai

// 🔥 Summary 🔥
// break → loop se bahar nikal jao 🚪
// continue → current round skip karo, next round me jao 🔁
