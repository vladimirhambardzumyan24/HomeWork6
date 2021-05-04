function largNumber(array, number) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      newArr.push(array[i]);
    }
  }
  if (newArr == "") {
    return "Such values do not exist.";
  }
  return newArr;
}
console.log(largNumber([1, 1, 2, -3, 0, 8, 4, 0], 9));
