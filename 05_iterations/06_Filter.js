// ⚡️ FILTER() METHOD IN JAVASCRIPT ⚡️

// 💡 filter() ek ARRAY method hai jo ek **NEW array** return karta hai
// jo sirf un elements ko rakhta hai jinke liye condition TRUE hoti hai ✅

// 🔹 forEach() ke opposite, filter() RETURN karta hai ek naya array
// 🔹 Original array ko change nahi karta (non-destructive)


// const coding = ["js", "ruby", "python", "java", "cpp"]

// const values = coding.forEach((index) => {
//     console.log(index)
//     return index;
// })

// console.log(values);

// 💬 Note: forEach() hamesha "undefined" return karta hai ❌
// ✅ filter() se difference yehi hai — wo return karta hai ek new array 🔥


// ⚙️ Example 1️⃣: Simple filter
const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NewNums = MyNums.filter((num) => num > 4);
console.log(NewNums);

// ✅ Output: [5, 6, 7, 8, 9, 10]
// 💡 Explanation: Sirf wo values new array me gayi jinke liye condition TRUE thi (num > 4)


// ⚠️ Example 2️⃣: Filter with curly braces
// const NewNums = MyNums.filter((num)=>{
//     num > 4
// })
// console.log(NewNums);

// ❌ Output: [] (empty array)
// 💡 Reason: curly braces {} lagaye to explicit "return" likhna zaruri hai!
// ✅ Solution 👇
// const NewNums = MyNums.filter((num)=>{ return num>4 })


// 🔹 Example 3️⃣: Same filtering using forEach()
const NewNumsArr = [];
MyNums.forEach((num) => {
  if (num > 4) {
    NewNumsArr.push(num);
  }
});
console.log(NewNumsArr);

// ✅ Output: [5,6,7,8,9,10]
// 💡 Same result, but forEach() me manually push karna padta hai
// 🔥 filter() ye kaam automatic karta hai aur concise hota hai


// ⚙️ Example 4️⃣: Filtering an array of objects
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// 🔹 Filter by genre
const userBooks = books.filter((bk) => {
  return bk.genre == 'Science';
});
console.log(userBooks);

// ✅ Output: Sirf "Science" genre wali books ka array
// 💡 Perfect for category filtering or search results


// 🔹 Filter by multiple conditions
const userBooksPub = books.filter((bk) => {
  return bk.publish > 1990 && bk.genre === 'Non-Fiction';
});
console.log(userBooksPub);

// ✅ Output: Wo books jinki publish year > 1990 hai aur genre 'Non-Fiction' hai
// 💡 Multiple conditions ko combine karne ke liye '&&' aur '||' use kar sakte ho


// 🧠 QUICK SUMMARY 🧠
// -------------------------------------------------
// ✅ filter() → returns NEW array based on condition
// ✅ Original array safe (no change)
// ✅ Must return TRUE/FALSE condition
// ✅ forEach() → kuch return nahi karta ❌
// ✅ Useful for → search, data filtering, table results, etc.
// -------------------------------------------------

// 💡 Tip: 
// Short condition → (num > 4)
// Multiple condition → (num > 4 && num < 8)
// Object filtering → (item.genre === "Fiction" && item.publish > 2000)

