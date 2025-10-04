const score=400;
console.log(score);

// this is by default number 

const balance=new Number (1000);
console.log(balance);
// this is exclusively we define as number

console.log(balance.toString())// now the data type of balance is string
console.log(balance.toString().length) // after converting into balance it will give the length of string
console.log(balance.toFixed(2));
// most of the times the client need not to see the precison value 
// so we use toFixed

// hundreds 
const otherNumber=23.8967;
console.log(otherNumber.toPrecision());

const hundreds=10000000;
console.log(hundreds.toLocaleString('en-IN'));

// ###########  maths ###############
console.log(Math); // properties visible more on inspect
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor());
console.log(Math.ceil());
console.log(Math.floor());
console.log(Math.min(4,-6,7,3));
console.log(Math.random()); // between 0 and 1
console.log(Math.random()*10+1) // 0 bhi aa skta h usko avoid krne ke liye
const min=10;
const max=20;
console.log(Math.floor((Math.random()*(max-min+1)+min)));

