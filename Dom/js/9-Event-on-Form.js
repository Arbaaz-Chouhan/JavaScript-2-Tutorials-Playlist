let x =  document.getElementById("myInput");

x.addEventListener('focus', myfocusFunction);
x.addEventListener('blur', myblurFunction);

x.addEventListener('input', function(){
    console.log(this.value);
})


function myfocusFunction(){
    x.style.background ="black";
}

function myblurFunction(){
    x.style.background ="white";
}