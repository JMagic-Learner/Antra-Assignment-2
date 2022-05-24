// mySome 

const limit = 18;
function conditionalCHECK(input) {

    // SCENARIO 1: Filter by upper limit 
    if (input > limit)
        return true

    // SCENARIO 2: Filter by if the index number is divisible by 2 

    // if (input % 2 === 0) {
    //     return true;
    //   }

    // return false;


    // SCENARIO 3: Filter by character count. set limit to 6 to see that agesTest2 returns 'twelve' and 'thirty'
    if (typeof input === "string") {
        let lengthcheck = input.length;
        if (lengthcheck == limit) {
            return true;
        }
    }
    return false
}

Array.prototype.mySome = function () {

    for (let i = 0; i < this.length; i++) {
        if (conditionalCHECK(this[i]) == true) {
            return true;
        }

    }
    return false;
}

const ages = [3, 10, 18, 20]; // Scenario 1 True, Scenario 2: True
const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Scenario 1: False, Scenario 2: True
const testCase3 = ["1", "2", 13, "19", 8, 7, 7]; // Scenario 1: False Scenario 2: True
const testResult1 = ages.mySome();
const testResult2 = testCase2.mySome();
const testResult3 = testCase3.mySome();
console.log("The results of Jason's prototype method for the testCase1 / ages array " + testResult1);
console.log("The results of Jason's prototype method for the testCase2 array " + testResult2);
console.log("The results of Jason's prototype method for the testCase3 array " + testResult3);
