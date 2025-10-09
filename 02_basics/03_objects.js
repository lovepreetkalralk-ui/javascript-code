// using constructor-Singelton
// using literals-not singelton
// object literals:
// imp interview ques take a symbol and put it in object
const mySym=Symbol("key1");
const JsUser={
    name:"Lovepreet",
    age:18,
    islogges:false,
    lastloggedIndays:["monday","tuesday"],
    email:"lovepreet@gmail.com",
    location:"jaipur",
    [mySym]:"mykey1"

}
    console.log(JsUser.name);
    // jab dot ki trah lete hai toh string ki trah lene ki jarurat nhi
    console.log(JsUser["email"]);

    console.log(typeof JsUser.mySym)// string data type
    console.log(typeof(mySym));

    JsUser.email="loveprret@gooogle.com";

    // freezing object so that property cannot be changed
    // Object.freeze(JsUser);
    console.log(JsUser);

    // adding a function in object
    JsUser.greeting=function(){
        console.log("hello js user");
    }
    console.log(JsUser.greeting);
    JsUser.greetingtwo=function(){
        console.log(`Hello JS user, ${this.name}`)
    }
    console.log(JsUser.greetingteo());