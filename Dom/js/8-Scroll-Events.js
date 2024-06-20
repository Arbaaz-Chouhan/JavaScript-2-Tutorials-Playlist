// window.addEventListener("wheel" , function(event){
//     if(event.deltaY < 0){
//         console.log("scrolling up..");
//     }
//      else if(event.deltaY >0){
//         console.log("scrolling down..");
//     } 
// })

      window.addEventListener("scroll" ,function(){
      if(window.pageYoffset > 150){
        document.body.style.background = "red";
      }else{
        document.body.style.background = "white";

      }
    
    
    })
       