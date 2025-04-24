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