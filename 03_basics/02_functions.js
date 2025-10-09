//... is a rest opeartor
function calculate_cart_price(...num1){
    return num1
}
console.log(calculate_cart_price(200,400,500))
// ... tells--functions mei multiple values kaise paas krenge 

// example2:
function calculate_cart_price(val1,val2,...num1){
    return num1
}
console.log(calculate_cart_price(200,400,500,2000)) // 500,2000
// passing object in functions

const user={
    name:"Lovepreet",
    age:21
}
function handleObject(anyObject){
    console.log(`username is:${anyObject.name} and age is:${anyObject.age}`);
}
handleObject(user) // calling func using object

// other way of doing this
handleObject({
  name:"cyb",
  age:67
})
// passing array in functions
//1. first method
const arr=[900,800,700]
 function second_value(get_arr){
    return get_arr[1]
 }
 console.log(second_value(arr))
 //2. console.log(second_value([800,900,700]))