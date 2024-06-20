let x = document.getElementById("mydiv");

let y = document.getElementById("btn");

y.addEventListener("click" , btnclick);
x.addEventListener("click" ,  divclick);

document.body.addEventListener("click",bodyclick);

function btnclick(){
    console.log("button clicked.....");
};

function divclick(){
    console.log("div clicked.....");
};

function bodyclick(){
    console.log("body clicked.....");
};
// 6