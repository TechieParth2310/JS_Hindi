const myNums =[1,2,3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} & currval: ${currval}`);
//     return acc+currval;
// },3)
// console.log(myTotal);


const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(TotalPrice);
