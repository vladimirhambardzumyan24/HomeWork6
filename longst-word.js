function longstWord(str) {
  let newArr = str.split(/[\s,-]+/);
  newArr.sort(function (a, b) {
    return a.length - b.length;
  });
  return newArr[newArr.length - 1];
}

console.log(
  longstWord("A revolution without dancing is a revolution not worth having.")
);
