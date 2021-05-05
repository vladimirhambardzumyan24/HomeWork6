function uniqueArray(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let array = [];
        array.push(arr[i], arr[j], arr[k]);
        newArr.push(array);
      }
    }
  }
  return newArr;
}
console.log(uniqueArray([5, 9, 23, 0, -2, -1]));
