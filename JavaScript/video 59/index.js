//This is a faulty calculator
function realOperation(a, b, opr){
    if(opr == "+"){
        return a+b;
    }
    else if(opr == "-"){
        return a-b;
    }
    else if(opr == "/"){
        return a/b;
    }
    else if(opr == "*"){
        return a*b;
    }
}
function faultOperation(a, b, opr){
    if(opr == "+"){
        return a-b;
    }
    else if(opr == "-"){
        return a/b;
    }
    else if(opr == "/"){
        return a**b;
    }
    else if(opr == "*"){
        return a+b;
    }
}
let random = Math.random();
let a = prompt("Enter 1st number:");
let num1 = parseFloat(a, 10);
let b = prompt("Enter 2nd number:");
let num2 = parseFloat(b, 10);
let opr = prompt("Enter operation(+,-,/,*)");
console.log(random);
if(random < 0.1){
    var ans = faultOperation(num1, num2, opr);
}
else{
   var ans = realOperation(num1, num2, opr);
}
alert("The answer is: "+ ans);

// Method 2
let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}
if(random < 0.1){
    let ans2 = eval(`${a} ${obj[opr]} ${b}}`);

}
else{
    let ans2 = eval(`${a} ${opr} ${b}}`)
}