let white = document.getElementById("white")
let aqua = document.getElementById("aqua")
let violet = document.getElementById("violet")
let black = document.getElementById("black")
let body = document.querySelector("body")
// 
white.addEventListener("click", () => {
    body.style.backgroundColor = "white";
    body.style.color = "black";
})
aqua.addEventListener("click", () => {
    body.style.backgroundColor = "aqua";
    body.style.color = "black";
})
violet.addEventListener("click", () => {
    body.style.backgroundColor = "violet";
    body.style.color = "black";
})
black.addEventListener("click", () => {
    body.style.backgroundColor = "black";
    body.style.color = "white";
})
