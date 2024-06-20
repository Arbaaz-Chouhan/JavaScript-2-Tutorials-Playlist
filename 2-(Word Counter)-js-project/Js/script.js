let textbox = document.getElementById("textbox");
textbox.addEventListener("input",function(){
    let text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;


    let words = text.split (" ");
    let cleanList = words.filter(function(elm){
        return elm != "";
    });

    document.getElementById("words").innerText = cleanList.length;
});
