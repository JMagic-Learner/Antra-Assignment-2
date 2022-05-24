// JASON MA reduce mimic

let array1 = [1,6,8,15,17,23]
let array2 = ['1','6','8','15','17','23']

Array.prototype.myReduce = function() {
    let valueSum = 0
    for (let i = 0; i < this.length; i++) {
        valueSum = valueSum+ this[i];
    }
    return valueSum;
}

const reduceResult = array1.myReduce();
const reduceResult2 = array2.myReduce();
console.log(reduceResult);
console.log(reduceResult2);