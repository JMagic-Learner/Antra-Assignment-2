// Antra Assignment 2 - Filter.
// Replicating the Filter prototype method.

// This is the default prototype method 'filter'. It removes all items with values greater than age.
const ages = ["33", "30", "16", "40", "45", "79"];
const agesTest = [33, 30, 16, 40];
const agesTest2 = ["eighteen", "thirty", "one", "twelve"]
const result = ages.filter(checkAdult);
const result2 = agesTest.filter(checkAdult);
const result3 = agesTest2.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}

console.log(result);  // returns an array of strings.
console.log(result2); // returns an array of numbers
console.log(result3); // Returns empty array.

// This is my personal version of filter

const limit = 18;
function conditionalCHECK (input) {

// SCENARIO 1: Filter by upper limit 
    if (input >= limit)
    return true

// SCENARIO 2: Filter by if the index number is divisible by 2 

    // if (input % 2 === 0) {
    //     return true;
    //   }
    
    // return false;


// SCENARIO 3: Filter by character count. set limit to 6 to see that agesTest2 returns 'twelve' and 'thirty'
    // if (typeof input === "string") {
    //     let lengthcheck = input.length;
    //     if (lengthcheck == limit) {
    //         return true;
    //     }
    // }
    // return false
}

Array.prototype.myFilter = function() {

// ACCORDING TO MDN DOCUMENTATION, FILTER ALSO WORKS FOR ARRAYS OF STRINGS
// Please see javascript lines 5 -8. - Jason Ma 5/23/2022
// Data Coercion converts both strings digits and number datatypes to a numerical value to check against checkAdult. Jason Ma 5/23/2022

let arrayStorage = [];

// Loop through the array, checking to see if every value in index matches 
    for (let i = 0; i < this.length; i++) {
        if(
            // this[i] >= LIMIT() 
            // || 
            conditionalCHECK(this[i]) == true) 
            {
            arrayStorage.push(this[i]);
        }
    }
    return arrayStorage;
}

const testResult = ages.myFilter();
const testResult2 = agesTest.myFilter();
const testResult3 = agesTest2.myFilter();
console.log(testResult);
console.log(testResult2);
console.log(testResult3);