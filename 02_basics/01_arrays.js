const arr=[0,1,2,3,4,"Lovepreet",true];
 const myArr=[1,2,3,4,5,6];
//read mdn doc
console.log(myArr[0]);
// 0 based indexing
// interview question
// array creates shallow copy
// changes does not reflect in original array

const numbers=[0,1,2,3,4];
const myheroes=["pokemon","shaktiman","naagraj"];

//another way of creating array
const arr2= new Array(1,2,3,4,5);
console.log(arr2[0]);
// array methods
myArr.push(8);
console.log(myArr); // value added at last
myArr.push(10);
myArr.pop(); //remove value from last

// unshift
myArr.unshift(11) // value added at the front 
// but unshift is not optmized bcoz the whole array has to be shifted
myArr.shift();// shift jo h uss added(11) ko remove kr deta hai
console.log(myArr.includes(9));//true or false
console.log(myArr.indexOf(3));
// tells the index of that element 
const newArr=myArr.join();
// join lga kr bhi whi same he elements ayenge bs farq ye h ki
// join ne elements ko join krdiya 
// aur unka data type string mei convert kridya
console.log(typeof(myArr)); // object
console.log(typeof(newArr)); // string


// slice and splice
 console.log("A",myArr); // giving name A to myArr
 const myn1=myArr.slice(1,3); // 3 not inlcuded
 console.log(myn1);
 console.log("B",myArr);

 const myn2=myArr.splice(1,3); //3 included
 console.log("C",myArr); // splice originialarray ko manipulate krta hai
 // splice 1 se lekar 3(including) tak values ko remove he kr dega original array se
 console.log(myn2);
