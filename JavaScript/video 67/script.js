console.log("Hello, World!");
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);
let cont = document.body.childNodes[1];
cont.lastElementChild.style.color = "red";
cont.firstElementChild.style.backgroundColor = "Grey";
console.log(document.body.children);
console.log(document.body.children[1].rows);