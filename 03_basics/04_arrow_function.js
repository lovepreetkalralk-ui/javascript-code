// ------------------ this keyword-------
const user={
    username:"Hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`)
        //console.log(this) ye this jo h current context de dega
        // means it will write username:hitesh
        // price:999
        // welcome message
    }

}
user.welcomeMessage()// hitesh
user.username="sam" // sam,welcome to the website
user.welcomeMessage();
// console.log(this)
 