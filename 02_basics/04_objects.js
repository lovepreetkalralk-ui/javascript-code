// using constructors -- singelon object 
// using literals------ non singelton object

// const tindrUser=new Object();
// const tinderUser={}

// console.log(tindrUser);
// console.log(tinderUser);
// both work same but the only differnce is singelton and non singelton


 // this is simple object creation using constructors
const tinderUser=new Object()
 tinderUser.id="122abc"
 tinderUser.name="Loveprreet"
 tinderUser.isloggedin=false
 //console.log(tinderUser);

 // objects ke andar objects
 const name={
    fullname:{
        username:{
            firstname:"Lovepreet",
            lastname:"kalra"
        }
    }
 }
//console.log(name.fullname.username);

// combining two objects
 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}
 const obj4={5:"a",6:"b"}
//  const obj3=Object.assign({},obj1,obj2,obj4);
//  console.log(obj3);

 // using spread operator (MOSTLY USED AND LATEST)
 const obj3={...obj1,...obj2}
  

 // ARRAY OF OBJECTS
 const user=[
    {
        id:1,
        email:"xxx@gmail.com"
    },
    {
        id:2,
        email:"yyy@gmail.com"
    }
 ]
 console.log(user[1].email)

 // coming to tinder user again
 console.log(Object.keys(tinderUser));
 // imp to know its data type i.e ARRAY
console.log(Object.values(tinderUser));
// key value ke pairs jo hai woh alag se ek square bracket mei ayenge
console.log(Object.entries(tinderUser));

// method to check if a property is present or not
console.log(tinderUser.hasOwnProperty('isloggedin'));
