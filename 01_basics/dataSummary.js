//primitive
// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100 

//Refrence Type(Non Primitive)
//Array, Objects, Functions

const heros = ["saktiman", "naagraj", "doga"]
let myObj= {
    name: "raghav",
    age: 22,
}
const myFunction= function(){
    console.log("Hello World");
}

 //*****************************************************  

 // stack(Primitive), Heap(Non-Primitive)

 let myYoutubeName ="RaghavKejriwal";

 let anotherName = myYoutubeName;
//  anotherName="chaiaurcode"

//  console.log(anotherName);
//  console.log(anotherName);
let userOne ={
    email: "user@google.com",
    upi: "raghav@ybl"
}
 
let userTwo = userOne;
// console.log(userTwo);

userTwo.email = "raghav@google.com"

console.log(userOne.email);
console.log(userTwo.email);
