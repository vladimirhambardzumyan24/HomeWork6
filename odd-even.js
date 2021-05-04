function OddorEven(arr) {
  let arrEven = [];
  let arrOdd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrEven.push(arr[i]);
    } else {
      arrOdd.push(arr[i]);
    }
  }

  return [arrOdd, arrEven];
}
console.log(OddorEven([45, 12, 3, 6, 17, 0]));
