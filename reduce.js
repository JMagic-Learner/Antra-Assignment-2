const array1 = [1, 2, 3, 4, 19];

// 0 + 1 + 2 + 3 + 4 + 19
let initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 29


Array.prototype.myReduce = function() {
    let valueSum = 0
    for (let i = 0; i < this.length; i++) {
        valueSum = valueSum+ this[i];
    }
    return valueSum;
}

const reduceResult = array1.myReduce();
console.log(reduceResult);

