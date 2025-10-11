// const userloggedin=true;
// if(2==2){
//     console.log("hello")
// }
// if(userloggedin){
//     console.log("yes logged in")
// }
// // <  ,  >  , <=  ,  >= , == ,  !=  ,===(also check the type)

// if(2=="2"){
//     console.log("executed");
// }
// if(2==="2"){
//     console.log("executed")
// }     // checks the type also

//         ----------------------------

// const temp=41
// if(temp<50){
//     console.log("less than 50");
// }
// else console.log("greater than 50");

// _----------------------------

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`); // yha output ayega power not defined
// bcoz uska scope if ke andar tak he h
// esliye var use ni krte kyuki global scope hota ha uska aur woh print bhi ho jata
// (let ya const use krioo)

// ------------------------------------

//  const balance=1000
// if(balance>500) console.log("test"); // yha pe scope implicit define hota hai
// multiple lines likhne ke liye { } lgao 



// -----------------

// if(balance<500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("lessthan 900");
// }
// else {
//     console.log("baln less than 1200")
// }

//-------------------------------

const userLoggesIn=true;
const debitcard=true;
const loggedfromgoogle=false;
const loggedfromemail=true;
if(userLoggesIn && debitcard){
    console.log("allow to buy a course")
}
if(loggedfromgoogle|| loggedfromemail){
    console.log("user logged");
}
