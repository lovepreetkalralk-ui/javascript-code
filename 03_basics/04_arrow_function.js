// ------------------ this keyword-------
const user={
    username:"Hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`)
        console.log(this) //ye this jo h current context de dega
        // means it will write username:hitesh
        // price:999
        // welcome message
    }

}
// user.welcomeMessage() // hitesh
// user.username="sam"  // sam,welcome to the website
// user.welcomeMessage();
console.log(this) //output:{} empty curly braces
// why these empty braces kyuki pehle sirf ek he tareeqa tha
// javascript ko run krne ka i.e engine 
// ab humne uss engine ko nikala khin usko name diya
// node,deno ya bun
// browser mei global object jo hai woh hai window object
// code env mei { } empty curly brcaes//



function chai(){
    let username="Lovepreet"
    console.group(this);
}
chai()
 // jab aap node env mei function ke andar this ko print krvate hai
 // toh boht sare values aati hai

 //function chai(){
//     let username="Lovepreet"
//     console.group(this.username); // ye context sirf objects mei he lgta hai,functions mei nhi
// }
// chai()


// -------------- arrow--------------

const thai=function(){
    let username="Lovepreet";
    console.log(this.username); // output:undefined
}
chai();

const chai=( )=>{
    let username="Lovepreet";
    console.log(this.username);// undefined
    console.log(this) //empty paranthsesis
}
//const addTwo=(num1,num2)=>{
    //return num1+num2
//}
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()