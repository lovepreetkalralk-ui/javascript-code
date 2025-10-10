if(true){
 let a=7;
  const b= 8;
  var c=10;
}
// if ke andr jo bhi likha hai woh block scope hai,jo bahr h woh global scope
console.log(a); //output- a is not defined
// bcoz woh scope ke andar he access ho skta hai
console.log(b); // output- b is not defined
console.log(c); //output -- yha pr c print ho jega 
// esliye we dont use var as much

// scenario 2:
//------------------------------------
// agr hum define kare 
// var a=9;
// if(true){
//     a=5;
//     or
//     var a=89;
// } 
// yhi pr error aa jega 
//----------------------------------------
// jo bhi code environment(vs code) mei global scope alg hai
// aur browser(inspect) karenge toh woh alg hai
// -----------------------------------------
// scope inside function 
function one(){
    const username="Lovepreet"

    function two(){
        const website="youtube"
        console.log(username);
    }
    console.log(website);
    two();
}
one();
// icecream example:parents orelders cannot snatch ice cream from younger ones
// but children can snatch ice cream from elders
// function two jo h woh username ko access kr pa rha hai
// but function one cannotaccess website which is inside the function 2
//-----------------------------------
if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
}
console.log(username);

//+++++++++++++++++++++++interesting+++++++++++++++
function addOne(num){
     return num+1
}
addOne(5);
// yha pr na return horha h print ni horha 6
//method 2 to make functions
const addTwo=function(num){
    return num+2
}
addTwo(5);