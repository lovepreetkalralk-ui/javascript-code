// let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof(myDate));// object

//  let createdDate= new Date(2004,5,14);
//  console.log(createdDate.toLocaleDateString());

 let MyCreate=new Date(2004,5,14,5,3) // here we have time-5:03:00
//  console.log(MyCreate.toLocaleString());
//  // a point to be noted is month start from 00

//  let birth=new Date("06-14-2004"); // MM-DD-YYYY
//  // uppr sab jagah jaha humne 5 likha h wha woh june h
//  // pr using  " " 06 is june
//  console.log(birth.toLocaleString());

 let timestamp=Date.now();
 console.log(timestamp);
  // this tells about the time in ms from that particular date 1 jan 1970
  console.log(MyCreate.gettime());
  // gettime jo h woh apki created date se time calculate krta hai in millisec
 console.log(Math.floor(timestamp/1000))

 let Newdate=new Date();
 console.log(Newdate.getDay()); // there are many more like getmonth ,getyear

 Newdate.toLocaleString('default',{
    weekday:"long"
 })

