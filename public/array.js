const array = [1, 2, 10, 20];
const double = [];
const newArray = array.forEach((num) => {
  double.push = num * 2;
});
console.log(newArray, double);
// map,filter, reduce
const mapArray = array.map((num) => {
  return num * 2;
});
console.log("map", mapArray);
