// let input = "no";
// if(input === 1) {
//     document.write("continue ....")
// } else if(input === "y"){
//     document.write("continue ....")   
// }
// else if(input === "yes"){
//     document.write("continue ....")   
// }
// else if(input === 0){
//     document.write("End ....")   
// }
// else if(input === "n"){
//     document.write("continue ....")   
// }
// else if(input === "no"){
//     document.write("End ....")   
// }
// else{
//     document.write("wrong input ....")   
// }


// let input = Number(prompt("ENTER THE NUMBER"))

// switch(input){

//  case 2:
//     document.write("continue ....")
//     break; 
// case 1: 
//     document.write("continue ....")   
//     break;
// case "y":
//     document.write("continue ....")   
//     break;
// case "no":
//     document.write("End ....")   
//     break;
// case "yes":    
//     document.write("continue ....")   
//     break;
// case 0:
//     document.write("End ....")   
//     break;
// default :{
//     document.write("wrong input ....")   
//  }
// }

// while loop

// let counter = 1;
// while(counter <=10){
//     document.write("Arbaaz chouhan" +"<br>")
//     counter++;
// }

// do while loop

// let counter = 1;
// do{
//     document.write("Arbaaz chouhan" +"<br>")
//     counter++;
// }
// while(counter <= 20)

// for loop

// for(a = 1; a < 10; a++ ){
//     document.write("Arbaaz chouhan" +"<br>");
// }


// brek and continue 

// for(counter = 1; counter <= 10; counter++){

// if(counter==5){
//     continue;

// }
// document.write(counter);
// document.write("<br>");

// }

// nested loop

// for(counter = 1; counter <10; counter++){

//    document.write(counter);
//     document.write("<br>");


//     for(counetr2 = 1; counetr2 <3; counetr2++){

//         if(counter == 5){
//             break;
//         }


//         document.write('Arbaaz');
//         document.write("<br>");
//     }
// }


// let counter = 1;
// sum = 0;

// while(counter <= 100){
// if(counter % 2 == 0){
//     sum = sum +counter;
// }
// counter++;

// }
// document.write(sum);

// prompt box

// let age = prompt("Enter the age");

// if(age != null){
//     document.write(`Your age ${age}`)
// }else{
//     document.write("Age Field was Blank");
// }

// confoirm box

// let response = confirm('Are You sure,You want to Deleted?');

// if(response){
//     alert("Deleted")
// }else{
//     alert("Not Deleted")
// }

//  Data type

// let type = "20";
// console.log(typeof type);

// let newtype = Boolean(type);
// console.log(newtype)
// console.log( typeof newtype);


// let str = "Arbaaz \n chanhan";
// console.log(str);

// let ab = "Arbaaz \t chanhan";
// console.log(ab);

// let fn = "Arbaaz \" chanhan";
// console.log(fn);


// let a = "My name is Adnan chouhan";

// let b = a.toUpperCase();
// console.log(b);



// let str = "My name is Adnan chouhan";

// let str2 = str.replace('Adnan','Arbaaz');
// console.log(str2);

// let str = "My name is Adnan chouhan";

// let str2 = str.split(' ');
// console.log(str2);


// let book = ["math" ,"phydics","Bio","computer science"];

// let book2 = [
//     ["math",["400","700"]],
//     ["phydics","200"],
//     ["Bio","300"],
//     ["computr science","600"],
// ]
// let book3  = book2[0][1][1];

// console.log(book3); 

// operation on Array

// let book = ["Math","Physics","Bio","computer science"];

// let booklength = book.length;

// for(i = 0; i < booklength; i++){
//     console.log(`Element ${i} is ${book[i]} \n `)
// }

// for Each function

// let book = ["Math","Physics","Bio","computer science"];

// book.forEach(Arbaaz);

// function Arbaaz(value,index){
//     console.log(index ,value);

// }

// tabal function

// for(i= 1; i <= 10; i++){
// document.write(`12 *${i} = ${12*i}`);
// document.write("<br>");
// }

// function MulTabale(num){
//     for(i= 1; i <= 10; i++){
//         document.write(`${num} * ${i} = ${num*i}`);
//         document.write("<br>");
//         }
// }
// MulTabale(4);

// function Ab (a,b){
//     document.write(a / b);

// }
// Ab(40,10);

// The arguments

// function add(){
//     if(arguments.length == 0){
// console.log("no arguments passed !");
//     }else{
//         let sum = 0;
//         for(i = 0; i< arguments.length; i++){
//    sum = sum + arguments[i];
//         }
//         console.log(sum);
//     }
// }
// add(4,10,10);


// Return a value in function

// function add(a,b){
//     let d = [20,10,30]
//     return d;


// }
// let c = add(20,90);

//     console.log(c);


// function compare(a,b){
//     if(a > b){
//         return 1;
//     }
//     else if(b > a){
//         return -1;
//     }
//     else{
//         return 0;
//     }
// }

// let c = compare(1,10);

// document.write(c);



// Global variable vs Local variable

// let a = "Arbaaz"; //Global variable

// function add(){

//     let b = "Adnan"//Local variable

// }
// add();
// document.write(a);

// Anonymouse function in javascript

// let show = function(){
//     console.log("Hello");
// }
// show();


// function show(){
//     console.log("Hello")
// }
// setTimeout(show ,3000)


// setTimeout(function(){
//     console.log("Hello !");
// },3000);


// Immediately Invoked  function

// (function(){
// console.log("Hello");
// alert("Hello");
// })();


// let show = "Hello my script"
// function add (){
//     console.log(show);
// }
// add();


// object

//  var person = {
//     firstName : "Arbaaz",
//     lastName : "chouhna",
// sayHello : function(){
//         console.log("Hello !");
//     }

// sayHello (){
//             console.log("Hello ! i hava a"+ this.firstName+"and i have a"+ car.brand + "car");
//         }
// };

// person.age = 16;
// for(key in person){
// console.log(key + ":" + person[key]  ) ;
// }

// person.sayHello =function(){
//             console.log("Hello !");
//         }


// let car = {
//     brand :"Tata",
//     modal : "safari"
// }

// function greet(){
//     console.log("Hello !");
// }


// person .sayHello =greet;

// person.sayHello();


// math methods

// let a = Math.round(4.29);
// console.log(a);


// let b = Math.ceil(4.29);
// console.log(b);

// let x = Math.floor(4.29);
// console.log(x);

// let c = Math.trunc(4.9);
// console.log(c);

// let d = Math.pow(10,3);
// console.log(d);

// let e = Math.sqrt(100 );
// console.log(e);

// let x = Math.min(4,10,3,20,12,13,14);
// console.log(x);

// let  f= Math.max(4,10,3,20,12,13,14);
// console.log(f);

// let y = Math.floor(Math.random() * 10) + 1;

// console.log(y);


// let x = Math.floor(Math.random() * (25-15)) +15;

// console.log(x);

// function getRandom(max,min){
//     let x = Math.floor(Math.random() * (max - min + 1)) + min;
//     return x;
// }
// console.log(getRandom(10,20));


// function getRandom(max,min){
//     let x = Math.floor(Math.random() * (max - min + 1)) + min;
//     return x;
// }
// console.log(getRandom(10,20))

// Date methods

// let x = new Date();
// x.setDate();
//  x.setFullYear(2033);
//  x.setMonth(11);
//  x.setMinutes(10);
//  x.setSeconds(20);


// console.log(x);

// let a = new Date();

// a.setDate(a.getDate() + 64);

// console.log(a);


// let a = new Date();
// let b = new Date();
// b.setDate(a.getDate()+64)

// console.log(a);
// console.log(b);


// Methods in Object

// var  person = {
//     name:"Arbaaz chouhan",
//     age:16,

//     set setname(n){
//         this.name = n.toUpperCase();
//     }

// };
// person.setname = "Arbaaz";
// console.log(person);

// Object constructor

/*function Student (first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = 16;
    this.class = 10;
    
}
Student.prototype.nationality = "Indian";

Student.prototype.name = function(){
    return this.firstName + " " + this.lastName;
  }


var Student1 = new Student("Arbaaz" , "chouhan" , 16, 10);
var Student1 = new Student("Adnan" , "chouhan" , 20, 12);


console.log(Student1);
*/


// Nested Object

/*var user = {
    id: 101,
    email: "abs@gmail.com",
    personalInfo: {
        name: "Arbaaz",
        address: {
            street: "dsgsgs",
            city: "Jodhpur",
            country: "India",
        }
    }

}
console.log(user.personalInfo.address.country);
*/

// Hosting


// Hello(); 

// function Hello(){
//     console.log("Hello world");
// }

 
// console.log(a);

// Document Object Model

/*var elm = document.getElementById("first");
elm.innerHTML = "<p>Hello wold</p>";

// console.log(elm.innerHTML);

var elm = document.getElementsByClassName("cl");

for(i = 0; i < elm.length; i++){
elm[i].innerHTML = "<p>Hello</p>";

}*/

// var div1 = document.getElemenstById("div1");
// var elm = div1.getElementsByTageName("h2");

// for(i = 0; i< elm.length; i++){
//     elm[i].innerHTML = "hello";
// }


/*var elm = document.querySelectorAll("p.intro");

for(i = 0; i < elm.length; i++){
    elm[i].innerHTML = "hello";
}*/

// var elm = document.getElementById("intro");
// var mode = elm.previousElementSibling ;
 // var prt = elm.parentElement;

// console.log(mode); 

/*
//  var elm = document.getElementById("intro");

//  elm.innerHTML = "<h1> this is a heading </h1>";

// var elm = document.getElementById("intro");

// var h1 = document.createElement("h1");

//  var text = document.createTextNode("this is  h1 tag");

//  h1.appendChild(text);

// h1.textContent = "Contet added"
// elm.appendChild(h1);

// document.body.appendChild(h1);

var pra = document.getElementById("p1");

console.log(pra.textContent);
*/

// let list1 = document.getElementById("list");

// let item = document.createElement("li");

// item.textContent = "New list 5";

// list1.appendChild(item);


/*let list1 = document.getElementById("list");

let item = document.createElement("li");

item.textContent = "New list 5";

let pos = list1.firstElementChild.nextElementSibling.nextElementSibling;

list1.insertBefore(item,pos);*/


 /*let pernt = document.body;

// inster Before

let alm = document.createElement("h2");

alm.textContent = "this is new element";

let list = document.getElementById("list");

pernt.insertBefore(alm, list);*/


// Remove Child Element

/*let pernt = document.getElementById("menu");

let elm = pernt.firstElementChild.nextElementSibling;

pernt.removeChild(elm); */

// document.body.removeChild(pernt);

// Clone or Copy Element

/*
let menu =document.getElementById("menu");

let clone = menu.cloneNode(true);

clone.id ="mobil-menu"

document.body.appendChild(clone);  */

// Replace element in javascript

/*let menu =document.getElementById("menu");

let item = document.createElement("li");
item.textContent ="servising";

let replace = menu.firstElementChild.nextElementSibling;

menu.replaceChild(item,replace); */

// Insert Adjacent HTML

// let elm = document.getElementById("intro");

// let html = "<h1>New h1</h1>";

// elm.insertAdjacentHTML("afterend",html);

