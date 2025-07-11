let a = [1,5,3,7,9,3]
// for(let index = 0; index < a.length; index++){
//     const element = a[index];
//     console.log(element);
// }
// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// });
let obj = {
    a:1,
    b:2,
    c:3
}
// for (const key in obj){
//     if (Object.hasOwnProperty.call(obj, key)){
//         const Element = obj[key];
//         console.log(Element)
//     } {   
//     }
// }
for (const element of a) {
    console.log(element);
}