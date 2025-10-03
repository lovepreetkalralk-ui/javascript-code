console.log("hello"+"world");
const name="Lovepreet";
const lastname="Kalra";
const repocount=444;
console.log(name+ lastname);
// modern way to write this
console.log(`My Name is ${name.toLower}and my repo count is ${repcount}`);
const gameName= new String('hitesh-hc');
console.log(gameName[0]);
console.log(gameName.__proto__);// object
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
// creating substring
const subpart=gameName.substring(0,4);
console.log(subpart);
const anotherString=gameName.slice(-8,4);
console.log(anotherString);
const string1="     hitesh      ";
console.log(string1);
console.log(string1.trim());
const url="http://www.hitesh20%@gmail.com";
console.log(url.replace('20%','-'));
console.log(url.includes('sundari'));// true or false
console.log(gameName.split('-'));