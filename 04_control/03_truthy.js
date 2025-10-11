const useremail="hitesh@gmail.com"
if(useremail){
    console.log(`${useremail}! got the user email`);
}
else{
    console.log("dont have useremail");
}
// string mei agr kuch hai toh value true mann li
// stirng empty hai toh useremail="" // false hai ye // else cond chlti

//  arr empty toh true

// falsy value

// false,0,-0,BigInt mei 0n,"",null ,undefined,NaN(not a number)

// except all truthy values
// truthy values eg-  "0",'false'," ",[],{},function(){}


if(useremail.length===0){
    console.log("array is empty")
}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}
//-------------------

//browser mei
false ==0 // true
false==''//true
0==''//true



//----------------------
// nullish coalescing operator(??):null undefined

//------
let val1;
val1=5 ?? 10
val2=null?? 10
val3=undefined ?? 15
val4=null ?? 10 ?? 15

console.log(val1);
console.group(val2); // output-10
// null ke base pe ho skta hai koiproblem aa jaye esliye ye oper usse ignore krta hai
console.log(val3);
console.log(val4); // jo pehli value isko mili woh


// ---------------------
// ternary operator
//condition?true:false

const iceTeaPrice=100;
iceTeaPrice<=80 ?console.log("less than 80"): console.log("greater than 80");
