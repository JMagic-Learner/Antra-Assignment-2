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

