function maxSum(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      string += str[i];
    } else {
      string += " ";
    }
  }
  string = string.split(" ");
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += +string[i];
  }
  return sum;
}
console.log(maxSum("FwrtY45KHL120mn10P"));
