const accountId=13444
let accountEmail="www.lovepreetvycjjh@gmail.com"
var accountName="xyz"
/* try not to use var because of block scope and functional scope */
accountCity="jaipur"// possible to have a variable w/o writing var ,const or let although 
// not a good practice
//accountId cannot be changed because of (const)
accountEmail="xyz.com"
let accountState;//either you write semicolon or not
console.table([accountId,accountEmail,accountName,accountCity,accountState]) 
/*account state has no value in it so it shows undefined */