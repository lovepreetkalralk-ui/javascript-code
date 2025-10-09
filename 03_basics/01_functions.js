// FUNCTIONS

// function print_name(){
//     console.log("L");
//     console.log("o");
//     console.log("v");
//     console.log("e");
//     console.log("p");
//     console.log("r");
//     console.log("e");
//     console.log("e");
//     console.log("t");

// }
// print_name()

function add_two_numbers(number1,number2){
    console.log(number1+number2);
}

// add_two_numbers(3,4);   //ans=7
// add_two_numbers(3,"4");  // ans=34
// values when called they are called as argumnets
// vaues when defined in function are parameters

const result=add_two_numbers(3,5);
console.log(result); // ans is undefined
// although we are printing but we have to return in order ti get ans
// we have to write function like this

function add_two_numbers(number1,number2){
    let result=number1+number2
    return result
}
// another way of writing this
function add_two_numbers(number1,number2){
    
    return number1+number2
}

function login_user_message(username){
    return `${username} just logged in`
}
console.log(login_user_message("Lovepreet"))
console.log(login_user_message()) //  ans=undefined
