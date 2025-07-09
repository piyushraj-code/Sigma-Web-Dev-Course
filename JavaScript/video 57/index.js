console.log("I am a tutorial on loop")
// There are 5 types of loop in javascript
// For loop
let a = 1;
for (let I = 0; I < 100; I++) {
    console.log(a+I);   
}
let obj = {
    name: "Piyush",
    role: "Data Scientis",
    company: "Self"
}
for (const key in obj){
    console.log(key, obj[key])
};
for (const c of "Piyush"){
    console.log(c)
}
let i = 1;
while(i < 6){
    console.log(i);
    i++;
}
