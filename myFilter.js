// This is my personal version of filter
const ages = ["33", "30", "16", "40", "45", "79"];
const agesTest = [33, 30, 16, 40];
const agesTest2 = ["eighteen", "thirty", "one", "twelve"]


function conditionalCHECK(input, limit) {

    // SCENARIO 1: Filter by upper limit 
    if (input >= limit)
        return true
}

function conditionalCHECK2(input, limit) {


    // SCENARIO 2: Filter by if the index number is divisible by 2 

    if (input % 2 === 0) {
        return true;
      }

    return false;
    }

    function conditionalCHECK3(input, limit) {
    // SCENARIO 3: Filter by character count. set limit to 6 to see that agesTest2 returns 'twelve' and 'thirty'
    if (typeof input === "string") {
        let lengthcheck = input.length;
        if (lengthcheck == limit) {
            return true;
        }
    }
    return false
}

Array.prototype.myFilter = function (callbackFn, limit ) {

    // ACCORDING TO MDN DOCUMENTATION, FILTER ALSO WORKS FOR ARRAYS OF STRINGS
    // Please see javascript lines 5 -8. - Jason Ma 5/23/2022
    // Data Coercion converts both strings digits and number datatypes to a numerical value to check against checkAdult. Jason Ma 5/23/2022

    let arrayStorage = [];

    // Loop through the array, checking to see if every value in index matches 
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], limit) == true) {
            arrayStorage.push(this[i]);
        }
    }
    return arrayStorage;
}

const testResult1a = ages.myFilter(conditionalCHECK, 18);
const testResult2a = agesTest.myFilter(conditionalCHECK, 18);
const testResult3a = agesTest2.myFilter(conditionalCHECK, 18);
const testResult1b = ages.myFilter(conditionalCHECK2, 18);
const testResult2b = agesTest.myFilter(conditionalCHECK2, 18);
const testResult3b = agesTest2.myFilter(conditionalCHECK2, 18);
const testResult1c = ages.myFilter(conditionalCHECK3, 6);
const testResult2c = agesTest.myFilter(conditionalCHECK3,6);
const testResult3c = agesTest2.myFilter(conditionalCHECK3,6);
console.log(testResult1a);
console.log(testResult2a);
console.log(testResult3a);
console.log(testResult1b);
console.log(testResult2b);
console.log(testResult3b);
console.log(testResult1c);
console.log(testResult2c);
console.log(testResult3c);