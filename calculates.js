function arrSum(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(arrSum([45, 12, 3, 6, 17, 0]));



function arrDifference(arr) {
  let difference = arr[0];
  for (let i = 1; i < arr.length; i++) {
    difference -= arr[i];
  }
  return difference;
}
console.log(arrDifference([45, 12, 3, 6, 17, 0]));



function arrDivision(arr) {
  let division = arr[0];
  for (let i = 1; i < arr.length; i++) {
    division /= arr[i];
  }
  return division;
}
console.log(arrDivision([450, 12, 3, 6, 17, 2]));



function arrMultiplication(arr) {
  let multiplication = arr[0];
  for (let i = 1; i < arr.length; i++) {
    multiplication *= arr[i];
  }
  return multiplication;
}
console.log(arrMultiplication([45, 12, 3, 6, 17, 0]));
