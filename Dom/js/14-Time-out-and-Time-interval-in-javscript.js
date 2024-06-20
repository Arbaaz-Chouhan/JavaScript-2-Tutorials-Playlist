// let time = setTimeout(myfunction ,5000);

// function myfunction(){
//  alert("please check my gitab id")   
// }

// clearTimeout(time);

setInterval(fun,2000);

function fun(){
    console.log("please check my gitab id");
}
var t1 = document.getElementById("btn");

t1.addEventListener('click' , function(){
    clearInterval(t1);
});