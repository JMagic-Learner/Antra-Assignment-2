// W3 Schools documentation;

const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

let result = ages.some(checkAdult);
console.log("The results of the default prototype method " + result);

