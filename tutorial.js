var num = 10;

function smallscope(){
    bleh = 69;
    
}
function scope(){
    console.log(num)
    console.log(bleh)

}
smallscope()
scope()
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