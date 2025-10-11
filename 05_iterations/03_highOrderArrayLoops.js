// for of 

// array specific loops
// ["","",""] array ke andar strings
// [{},{},{}] array ke andar objects
// const myArr=[1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
// }
// const greeting="hello world!"
// for(const greet of greeting){
//     console.log(`each char is ${greet}`);
// }

// ----------------------------------

// maps
// map bhi ek object hai
const mp=new Map()
mp.set('IN',"India")
mp.set('USA',"united state of america");
mp.set('Fr',"france");
mp.set('IN',"India");
//console.log(mp);
// india wali entry ek he baar ayegi
// unique values leta hai

for(const [key,value] of map){
    console.log(key,':-',value);
}

//--------------------
const myobj={
    game1:'nfs',
    game2:'spiderman'
}
// objects jo hai woh iterable nhi h
// for(const [key,value] of myobj){
//     console.log(key,':-',value);
// }
// we have diff methods for objects 