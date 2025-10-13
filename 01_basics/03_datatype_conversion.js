let score="33"
console.log(typeof(score))

let score1=Number(score) // jo score string tha uska type cast krdia number mei
console.log(typeof(score1)) // number

let a="33avb"
console.log(typeof(a)) // string
let a1=Number(a)
console.log(typeof(a1)) // number mei convert toh krdia pr usko smjh ni aya ki 33avb kaise number hai (not a number likh diya)
console.log(a1) // NaN


// if we typecast null then ans is: 0

let val=null;
let numvalue=Number(val);
console.log(val); // null
console.log(numvalue); //0
console.log(typeof numvalue); // number

//  if we typecast undefined then ans is:NaN
let value2=undefined;
let numvalue2=Number(value2);
console.log(value2);// undefined
console.log(numvalue2);//NaN
console.log(typeofnumvalue2); // number
//  if we typecast score="true" to number then ans is:1
 let islogged=1
 console.log(typeof islogged)
 
