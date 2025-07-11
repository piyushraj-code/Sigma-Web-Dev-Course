let arr = [1,42,44,2,11,4];
let nerArr = arr.map((e)=>{
    return e**2;
})
console.log(nerArr);
const greaaterThanSeven = ((e)=>{
    if(e>7){
        return true;
    }
    return false;
})

console.log(arr.filter(greaaterThanSeven));

let arr2 = [1,2,3,4,5,6];
const red = ((a,b) =>{
    return a+b;
})
console.log(arr2.reduce(red));