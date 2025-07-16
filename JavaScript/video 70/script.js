console.log("Script is running.");
let boxes = document.querySelector(".container").children;
function getRandomColor(){
    let color =  [];
    for(let i = 0; i < 3; i++){
        color[i] = Math.floor(Math.random()*255+1);
    }
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})
})

