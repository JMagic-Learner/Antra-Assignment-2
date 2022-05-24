// JASON MA reduce mimic

let array1 = [1, 6, 8, 15, 17, 23]
let array2 = ['1', '6', '8', '15', '17', '23']
let array3 = ["J", "O", "K", "I", "N", "G"]
let array4 = ["1", "8", "J", "U", "S", "T"]
let array5 = [1, 8, "J", "U", "S", "T"]

Array.prototype.myReduce = function (startingIndex) {
    let valueSum = startingIndex;
    for (let i = startingIndex; i < this.length; i++) {
        if (i == startingIndex ) {
        valueSum = this[startingIndex];
        } else {
        valueSum = valueSum + this[i];
        }
    }
    return valueSum;
}

const reduceResult = array1.myReduce(0);
const reduceResult2 = array2.myReduce(0);
const reduceResult3 = array3.myReduce(0);
const reduceResult4 = array4.myReduce(0);
const reduceResult5 = array5.myReduce(0);
console.log(reduceResult);
console.log(reduceResult2);
console.log(reduceResult3);
console.log(reduceResult4);
console.log(reduceResult5);