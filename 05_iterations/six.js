const coding=["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{
    return item
})
// for each jo h koi bhi value return nhi krta hai
 //----------------------------

 const myNums=[1,2,3,4,5,6,7,8,9,10];
//  const newNums=myNums.filter( (num)=>num>5)
//  console.log(newNums);
 // output= 6,7,8,9,10

 //------ other way
//  const newNums1=myNums.filter((nums)=>{
//     return nums>4
//  }) // jb bhi yha scope likhenge toh return likhenge

 //-------------------
 // using for each kaise hoga

//  const newNums=[]
//  myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
//  })

//---- array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let userbooks=books.filter((bk)=>bk.genre==='History')
console.log(userbooks);

 
let userbooks1=books.filter((bk)=>{

    return bk.publish>=2000 && bk.genre==='History'})
console.log(userbooks1);
