let div = document.createElement("div");// Creating a div
div.innerHTML = "I have been created. <b>By Piyush </b> ";
div.setAttribute("class", "created");// Giving attribute 
document.querySelector(".container").append(div); // Insert this div in container
let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<b> I am insterted after end. </b>");
