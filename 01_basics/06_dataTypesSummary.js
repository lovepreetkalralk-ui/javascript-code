// PRIMITIVE
//  string ,number,boolean,null,undefined,symbol,bigInt
// NON -PRIMITIVE(REFERENCE )
 // array ,object,functions

 //JavaScript is a dynamically typed language. 
 // This means that variable types are determined at runtime, 
 // and you do not need to explicitly declare the type of a variable before using it.
 //  You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:
// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and 
// the type checking is done at compile-time, before the code is executed.

const logged=false;
const number=13
const name="Lovepreet"
const temperature=null;
let userEmail;      // by default it is undefined although you can predefine it
const id=Symbol('123')
const userId=Symbol('123')
// symbol means this particular variable is unique
console.log(id==userId)      // although equal but due to symbol it is unique and hence,not equal
// const bigNum=4432324235n;     (bigInt)
//
//array
const name1=["lovepreet","shruti","riya","ritika"];
const obj1={
    n:"Lovepreet",
    a:21
}
const myFunction=function(){
    console.log("Hello");
}
console.log(typeof temperature)// object
console.log(typeof myFunction) // function object
