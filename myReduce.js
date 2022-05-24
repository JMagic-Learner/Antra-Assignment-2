// JASON MA reduce mimic

let array1 = [1, 6, 8, 15, 17, 23]
let array2 = ['1', '6', '8', '15', '17', '23']
let array3 = ["J", "O", "K", "I", "N", "G"]
let array4 = ["1", "8", "J", "U", "S", "T"]
let array5 = [1, 8, "J", "U", "S", "T"]

Array.prototype.myReduce = function () {
    let valueSum = 0;
    for (let i = 0; i < this.length; i++) {
        if (i == 0 ) {
        valueSum = this[i];
        } else {
        valueSum = valueSum + this[i];
        }
    }
    return valueSum;
}

const reduceResult = array1.myReduce();
const reduceResult2 = array2.myReduce();
const reduceResult3 = array3.myReduce();
const reduceResult4 = array4.myReduce();
const reduceResult5 = array5.myReduce();
console.log(reduceResult);
console.log(reduceResult2);
console.log(reduceResult3);
console.log(reduceResult4);
console.log(reduceResult5);