// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const ScoreValue = 100.3


const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigNumber = 19998798465498765124n




// Reference type (Non Primitive)

//Array, Objects, Functions 


const heros  = ["Superman", "Ironman", "Batman"] //Array

let myObj = {
    name:"Maiz",                   //Object
    age: 18,

}
//console.log(myObj);

const myFunction = function(){

    console.log("Hello World");
    
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

//Stack(Primitive)  and Heap(Non-Primitive)

let myname = "Maiz"

let anothername = myname
 
 anothername = "Gudda"
 
 console.log(anothername);
 console.log(myname);
 

 let user = {

 email:"maiz@google.com",
 StudentId:"2412d"

 }

 let anotheruser = user 
 
 anotheruser.email = "gudda@google.com"
 console.log(anotheruser.email);
 console.log(user.email);
 
 
 
 
 
 
 
 
 //node 01_basic/DatatypesSummary.js