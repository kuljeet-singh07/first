
let newBtn = document.createElement("button");
newBtn.innerText = "Click me !"
newBtn.style.margin="1rem"
newBtn.style.backgroundColor="darkGray";
newBtn.style.color="white";
console.log(newBtn);


let div = document.querySelector("div");
div.prepend(newBtn);


let newHeading =document.createElement("h1");
newHeading.innerHTML = "<i>HI, I am kuljeet</i>"

document.querySelector("body").prepend(newHeading);


let para = document.querySelector("p");
para.remove();



let tex = document.querySelector("p");
 tex.classList.add("newText");

