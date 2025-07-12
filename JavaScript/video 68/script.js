document.title = "Selecting by ID's and more";

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "green";

document.getElementById("red").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "Purple";
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "Yellow";
})
