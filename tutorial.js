//! more of arrays
// let ar = ['blah', 'bleh', 'blooh', 'bluuh'];
// x = ar.length;

// ar.pop();
// ar.push('buiih');
// ar.unshift('buahha');
// ar.shift();
// ar.reverse();
// console.log(ar.includes('blah'))
// // slice and splice
// console.log(ar);
//!DateTimeFormat API
// let d = new Date();
// x = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}
//  ${d.getDate()} ${d.getFullYear()}`;

// console.log(x);
// x = Intl.DateTimeFormat('en-IN').format(d);
// console.log(x);

// let d

// d = new Date()

// dnew = new Date(2023,11,25)
// console.log(dnew)
// console.log (Date.now())
//!Challenge #2
// x = Math.random()*100
// y = Math.random()*51

// let sum = Math.floor(x + y)
// let diff = Math.floor(x - y)
// let pro = Math.floor(x * y)
// let div = Math.floor(x / y)

// console.log(`x+y = ${sum}
// x-y = ${diff}
// x*y = ${pro}
// x/y = ${div}`)

// console.log(y)

//!Math object
// x = Math.random()

// console.log(x)
//! Number object
// let x

// const blah = new Number(69.1)

// x = blah.toString()

// x = blah.toString().length

// x = blah.toFixed(10)

// x = blah.toLocaleString('en-IN')

// console.log(x)
// console.log(typeof x)
//! Exercise
// var str = "blah"
// array = str.charAt(0).toUpperCase()+str.slice(1)
// // newstr = array.
// console.log(array)
// bleh.charAt(0) = bleh.charAt(0).toUpperCase()
//! Some cool functions to use on strings
// .log(s)

// x = str.toUpperCase()
// console.log(x)

// x = str.toLowerCase()
// console.log(x)

// x = str.charAt(0)
// console.log(x)

// x = str.indexOf("T")
// console.log(x)

// x = str.substring(0,6)
// console.log(x)

// x = str.slice(-3,-1)
// console.log(x)

// x = str.split("")
// console.log(x)

// x = 2 == 2
// console.log(x)

// function bleh() {

// }

// let str = "Hey There!"
// s = new String(str)
// console.log(s)
// console.log(s[9])
// xed = str.__proto__;
// console
//!Started the 36hrs course 🫠
// var num = 10;
// var nem = "6969"
// nem = parseInt(nem) // OR +nem OR Number()
// console.log(typeof (nem))
// num = num.toString()
// console.log(typeof num)

// function smallscope() {
//     bleh = 69;
// }
// function scope() {
//     console.log(num);
//     console.log(bleh);
//     console.log("Surprise")
// }
// smallscope();
// scope();
// !Validates Credentials entered in form
// function credValidate(){

//     let name=document.getElementById("username").value;
//     let mail=document.getElementById("user-mail").value;
//     let password=document.getElementById("password").value;

//     if(password.length > 10){
//         return(alert("Strong aanee💪"),alert(name + " added to database"))
//     }else{
//         return(alert("Yowai mo🤡"))
//     }
// }

// passwordValidate("aklsjla")
// ! This sh*t is deep
// var naani = function (arg1) {
//   if (arg1 === "Ashvin") {
//     return function (arg2) {
//       alert("Hi there" + arg2)
//     };
//   }else{
//     return function(arg2){
//       alert(arg2 + "......., nee etha?")
//     };
//   }
// };

// let output=naani("Ashvin");//this is arg1
// output("")//here we give arg2

// ! This is something to look at!
// function test(bleh){
//   bleh("wpwoeipoi")
// }

// test(function(arg){
//   alert("message "+ arg)
// });

// !How to use ? operator (scene saadanam)
// num = 11
// var output = (num%2===0)? IfTrue():IfFalse();
// // alert(output)

// function IfTrue(){
//   return(alert("Trueee aneeeeee"))
// }

// function IfFalse(){
//   return(alert("Falseeee aneeeeeeeeeee"))
// }

// const myImage = document.querySelector("img");
// !Something else
// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/dfe6ff10-19ca-11ee-8d5b-8f954b8ec342.gif") {
//     myImage.setAttribute("src", "images/Rotating_earth_(large).gif");
//   } else {
//     myImage.setAttribute("src", "images/dfe6ff10-19ca-11ee-8d5b-8f954b8ec342.gif");
//   }
// // };
// !How to use functions
// function doSomething(x) {
//   alert(x); // ReferenceError: x is not defined
//   let x = 10;
// }
// alert("Hello")
// function doSomething(x) {
//   alert(x); // undefined
//   var x = 10;
// }

// doSomething(10)
// !Some bs that wont work in Chrome.
// document.querySelector("html").addEventListener("click", function () {
// //     alert("Ouch! Stop poking me!");
// //   });
// alert()

// var password="lsakdjflkdjfa"
// let num=5
// // if (num==5){
// //     alert("its fiv alright "+password)
// // }else{
// //     alert("Somethin else")
// // }

// function passwordValidate(password){
//     while(password){
//         return(alert("Password entered"))

//         // if(password.)
//     }
// }

// passwordValidate("sdkfjhskdjfh")
