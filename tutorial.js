//!DOM.....the rest will be continued in script.js

console.log(document.links[0])

// document.body.innerHTML = '<h1>I changed it lol</h1>'


//! Challenge#8
// const array = ['hey', 'there', 'big', 'guy']

// const capitalise = array.forEach(function (word) {
//     console.log(word.charAt(0).toUpperCase()+word.slice(1))
// })

// const array = [2, -3, 5, -9, 1, -4, 7, 8]

// const positive = array.filter(x => x > 0).reduce((acc,curr)=>acc+curr)
// console.log(positive)



// const people = [
//     {
//         firstname: 'dwayne',
//         lastname: 'johnson',
//         email: 'therock@gmail.com',
//         age:45
    
//     },
//     {
//         firstname: 'john',
//         lastname: 'wick',
//         email: 'johnwick@gmail.com',
//         age:35
    
//     },
//     {
//         firstname: 'harry',
//         lastname: 'potter',
//         email: 'harrypotter@gmail.com',
//         age:25
    
//     },
//     {
//         firstname: 'peter',
//         lastname: 'parker',
//         email: 'peterparker@gmail.com',
//         age:23
    
//     },
//     {
//         firstname: 'gwen',
//         lastname: 'stacy',
//         email: 'gwenstacy@gmail.com',
//         age:22
    
//     },
// ]

// const youngppl = people.filter(pp => pp.age < 30) //! Look how map is used
//     .map(pp => ({
//         name: pp.firstname + ' ' + pp.lastname,
//         email: pp.email,
            
// }))
// console.log(youngppl)

//! Map

// const arra = [1, 2, 3, 4, 5, 6];
// const map = arra.map((x) => x * 2);
// console.log(map)

// const arra2 = ['asd','qwe','rtyrty','mxmcvz'];
// const map2 = arra2.map((y) =>y+'ajsl');
// console.log(map2)

//! Filter
// const arra = [1, 2, 3, 4, 5, 6, 7];
// // const evenArra = arra.filter(function (num) {
// //     if (num % 2 === 0) return console.log(num);
// // }); OR
// const evenArra = arra.filter(num => num % 2 === 0);
// console.log(evenArra)

// const company = [
//     {name:'blah0',category:'finance',start:'1981',end:'2380'},
//     {name:'blah2',category:'retail',start:'1981',end:'2380'},
//     {name:'blah3',category:'auto',start:'1981',end:'2380'},
//     {name:'blah4',category:'retail',start:'1981',end:'2380'},
//     {name:'blah5',category:'finance',start:'1981',end:'2380'},
//     {name:'blah6',category:'auto',start:'1981',end:'2380'},
//     {name:'blah7',category:'finance',start:'1981',end:'2380'},
// ]

// const compaFilter = company.filter(com => com.category === 'retail')
// console.log(compaFilter)

//!ForEach
// const arra = ['nl', 'wpeoi', 'xcbmb', 'qwuie']

// function callit(item) {
//     console.log(item)
// }
// arra.forEach(callit)// Remember to not put () inside forEach

// console.log(arra)

//! For in loop
// const obj = (
//     {
//         id: '23',
//         name: 'Adhv',
//         pla: 'dlksjf'
//     }
// );
// for (item in obj) {
//     console.log(item,obj[item])
// }

// const array = ['red', 'blah', 'dlkfjsdf', 'aowiqpw', 'mncxbz']

// for (const key in array) {
//     console.log(array[key])
// }

//! For of loop
// const items = ['bana', 'apple', 'cat', 'doggo']

// for (item of items) {
//     console.log(item)
// }
// !Map in JS
// const map = new Map()
// map.set('name', 'Ash')
// map.set('age', '420')

// for (item of map) {
//     console.log(item)
// }
// console.log(map)

//! Use for loop while no of iterations is known.
//! Use while loop while no of iterations is unknown.

// const arry = [1, 2, 3, 4];
// let i=0
// while (i < arry.length) {
//     console.log(arry[i]);
//     i++;
// }
//! Falsey values
// false,"",'',0,null,NaN,undefined

//! Challenge#7
// function calculator(num1, num2, operate) {
//     let out
//     switch (operate) {
//         case '+':{
//             out = num1 + num2
//             break;
//         }
//         case '-': {
//             out = num1 - num2
//             break;

//         }
//         case '*': {
//             out=num1*num2
//             break;
//         }
//         case '/': {
//             out=num1/num2
//             break;
//         }

//         default: {
//             out = 'Invalid operator'
//             break
//         }

//     }
//     return out
// }
// console.log(calculator(69,420,'/'))
//! Challenge#6
// const getCelsius = (faren) => ((faren - 32) * 5) / 9;
// console.log(getCelsius());

// const minMax = (...numbers) => ` Min is ${Math.min(...numbers)}. Max is ${Math.max(...numbers)}`;
// console.log(minMax(1, 2, 3, 4, 5))

// ((length, width) =>{
//         const area = length * width;
//         const out = `Area is ${area}`
//         console.log(out)
//     })
//    (94,6)
//! Immediately invoke functions

// (function () {
//     console.log('Somethin inside');
//     const hello = () => console.log('somethin cookin');
//     hello();
// })();

// hello();
//! Arrow Functions
// const add = (a,b) => a+b
// console.log(add(1, 2))

// const obj = () => ([
//     {id: 1,
//     name: 'Ash',
//     place: 'Kazhak',},
//     {id: 2,
//     name: 'Bash',
//     place: 'Lazhak',
//     }
// ])
// console.log(obj()[1].id)
// !2 ways of calling a function
// function sample1(para) {
//     return para + ' aane';
// }

// console.log(sample1('blah'));

// const sample2 = function (para) {
//     return para + ' alla';
// };

// console.log(sample2('blah'))
// !Var is function scoped but not block scoped!!
// if (true) {
//     const a = 100
//     let b = 200
//     var c = 300
// }

// console.log(c)

// function blah() {
//     const d = 100
//     let e = 200
//     var f = 300
// }
// console.log(f)

// !Default & Rest parameters
// function blah(para="bot") {
//     return(para +" is typing")
// }

// console.log(blah())

// function rest(...numbers) {
//     total = 0
// for (i = 0; i < numbers.length; i++){
//     total+=numbers[i]
// } OR
//     for (const num of numbers) {//! use OF
//         total+=num
//     }
//     return total
// }

// console.log(rest(1,2,3,4,5,6))
// !Challenge #5

// const library = [
//     {
//         title: 'ABC',
//         author: 'blah',
//         status: {
//             own: true,
//             reading: false,
//             read: false,
//         },
//     },
//     {
//         title: 'DEF',
//         author: 'bleh',
//         status: {
//             own: true,
//             reading: false,
//             read: false,
//         },
//     },
//     {
//         title: 'GHI',
//         author: 'bluh',
//         status: {
//             own: true,
//             reading: false,
//             read: false,
//         },
//     },
// ];

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// const { title: firstbook } = library[0];

// json_lib = JSON.stringify(library);

// console.log(json_lib);
// !JSON
// const post = {
//     id: '1',
//     name: 'Ashvin',
//     place: 'Kazhak',
//     time: '23:37hrs'
// }

// jsoned = JSON.stringify(post)
// console.log(jsoned)

// parsed = JSON.parse(jsoned)
// console.log(parsed)
// ! Destructuring
// const obj = {
//     field1: 'value1',
//     field2: 'value2',
//     field3: 'value3',
// };

// const { field1,field2,field3 } = obj
// console.log(field2)

// !Object Literals
// const blah = 30
// const bleh = 32
// const blih = 34
// const obj = {
//     blah,bleh,blih
// }
// console.log(obj.bleh)
// obj1 = {
//     a: 1,
//     b:2,c:3
// }
// obj2 = {
//     d: 4,
//     e: 5,
//     f: 6
// }
// obj3 = { ...obj1, ...obj2 }//Neat!
// console.log(obj3)
// const person = {
//     name: 'Ashvin',
//     place: 'Kazhak',
//     hobbies: 'typing blah',
//     address: {
//         street: 'blah',
//         house: 'bleh',
//         city: 'kazhak',
//     },
//     array: [1, 2, 3, 4],
// };
// person.dosomethin = function () {
//     console.log(`Im ${this.name} and Im from ${this.place} situated at
//     ${this.address.street}, ${this.address.house}, ${this.address.city}`);
// };
// person.dosomethin();
// delete person.place
// console.log(person);
// !Challenge #4
// let x = [1, 2, 3, 4, 5];
// let y = [5, 6, 7, 8, 9, 10];
// wew = [...x, ...y]
// wew.splice(4,1)
// console.log(wew)
// !Challenge #3
// let x = [1, 2, 3, 4, 5];
// x.push(6)
// x.unshift(0)
// console.log(x.reverse())

//! more of arrays
// let arr1 = ['apple', 'ball', 'cat', 'dog']
// let arr2 = ['eleph', 'fish', 'gorilla', 'ice']

// arr1.push(arr2)
// arr1=arr1.concat(arr2)
// x=[...arr1,...arr2]// Spread operator 🥪
// console.log(x)

//Flatten arrays
// const arr = [1, 2, [3, 4, 5, [6, 7, [8, 9]]], 10]
// x=arr.flat(3)
// console.log(x)
// x = Array.from(1234)
// console.log(x)
// let ar = ['blah', 'bleh', 'blooh', 'bluuh'];
// x = ar.length;

// ar.pop();
// ar.push('buiih');
// ar.unshift('buahha');
// ar.shift();
// ar.reverse();
// console.log(ar.includes('blah'))
// slice and splice
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
// newstr = array.
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
// alert(output)

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
// };
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
//     alert("Ouch! Stop poking me!");
//   });
// alert()

// var password="lsakdjflkdjfa"
// let num=5
// if (num==5){
//     alert("its fiv alright "+password)
// }else{
//     alert("Somethin else")
// }

// function passwordValidate(password){
//     while(password){
//         return(alert("Password entered"))

// if(password.)
//     }
// }

// passwordValidate("sdkfjhskdjfh")
