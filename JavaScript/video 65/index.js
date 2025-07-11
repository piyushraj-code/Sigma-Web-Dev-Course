// This program calculates the factorial.
// Using loop
let num = prompt("Enter the number:");
let factorial = 1;
for(let i = 1; i <= num; i++){
    factorial = factorial*i;
}
console.log(factorial);

// Using reduce
var arr = [];
for(let i = 1; i <= num; i++){
    arr.push(i);
}
const fac = ((a,b) =>{
    return a*b;
})
console.log(arr.reduce(fac));