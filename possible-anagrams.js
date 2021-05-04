function possibleAnagrams(str, arr) {
  let lastArr = arr;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = lastArr.filter((el) => {
      if (el.indexOf(str[i]) !== -1 && el.length === str.length) {
        return el;
      }
    });
  }
  return newArr;
}
console.log(
  possibleAnagrams("listen", ["enlists", "google", "inlets", "banana"])
);
