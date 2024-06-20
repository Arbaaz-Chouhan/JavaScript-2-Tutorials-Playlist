// console.log(window.innerHeight);
// console.log(window.innerWidth);

// console.log(window.outerHeight);
// console.log(window.outerWidth);

let btn1 = document.getElementById("btn1");
let url ="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
let featurse =  "heigth:500, width=500";

btn1.addEventListener('click' , function(){
    window.open(url,Googal,featurse)
})