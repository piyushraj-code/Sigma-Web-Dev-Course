function getColor() {
    let color = [];
    for(let i = 0; i < 3; i++){
        color[i] = Math.floor(Math.random()*255+1);
    }
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}
let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("I was clicked")
    document.body.style.backgroundColor = getColor();
})