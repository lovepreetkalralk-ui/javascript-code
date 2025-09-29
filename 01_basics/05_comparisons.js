// console.log(2>1);
// console.log(2!=1);

//problem arises when there are different data types 

// console.log("2">1)// make sure that it should have same data type

// 1.console.log(null > 0); // false
// Comparison (>) converts null to a number before comparing.

// null is converted to 0.

// 0 > 0 is false.

// 2. console.log(null == 0); // false
// The equality check (==) does not convert null to a number.

// null is only equal to undefined in loose equality (==), not to numbers.

// So, null == 0 is false.

// 3. console.log(null >= 0); // true
// The >= comparison also converts null to a number (0).

// It becomes 0 >= 0, which is true.
// console.log(null>=0);
// console.log(null==0);
// console.log(null<0);

// undefined
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<0); // this is false for all three cases


// === (strict check,check value as well as data type)
console.log("2"==2)// false

//summary:these type of conversion can put you in confusion any time so try to avoid