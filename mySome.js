// mySome 


const limit = 18;
function conditionalCHECK(index, conditionInput ) {

    // SCENARIO 1: Filter by upper limit 
    if (index > conditionInput) {
        return true
    }
}
function conditionalCHECK2(index,conditionInput) {
    // SCENARIO 2: Filter by if the index number is divisible by 2 

    if (index % 2 === 0) {
        return true;
      }

    return false;
}

function conditionalCheck3(index,conditionInput) {
    // SCENARIO 3: Filter by character count. set limit to 6 to see that agesTest2 returns 'twelve' and 'thirty'
    if (typeof index === "string") {
        let lengthcheck = index.length;
        if (lengthcheck == conditionInput) {
            return true;
        }
    }
    return false
}

function conditionalCheck4(index,conditionInput) {
    // SCENARIO 3: Filter by character count. set limit to 6 to see that agesTest2 returns 'twelve' and 'thirty'
    if (index === conditionInput) {
        return true;
    }
    return false
}

Array.prototype.mySome = function (scenario, condition) {

    for (let i = 0; i < this.length; i++) {
        if (scenario(this[i], condition) == true) {
            return true;
        }

    }
    return false;
}

const ages = [3, 10, 18, 20]; // Scenario 1 True, Scenario 2: True
const testCase2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Scenario 1: False, Scenario 2: True
const testCase3 = ["1", "2", 13, "19", 8, 7, 7]; // Scenario 1: False Scenario 2: True
const testCase4 = ["WHERE", "PUT", "JOIN"]
const testResult1 = ages.mySome(conditionalCHECK,18);
const testResult2 = testCase2.mySome(conditionalCHECK,18);
const testResult3 = testCase3.mySome(conditionalCHECK,18);
const testResult4 = testCase4.mySome(conditionalCheck4,"PUT");
const testResult5 = testCase4.mySome(conditionalCheck4,"PEASY");
console.log("The results of Jason's prototype method for the testCase1 / ages array " + testResult1);
console.log("The results of Jason's prototype method for the testCase2 array " + testResult2);
console.log("The results of Jason's prototype method for the testCase3 array " + testResult3);
console.log("The results of Jason's prototype method for the testCase4 array " + testResult4);
console.log("The results of Jason's prototype method for the testCase4 array " + testResult5);