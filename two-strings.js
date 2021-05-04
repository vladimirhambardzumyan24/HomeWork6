function twoStrings(arr, str) {
  while (arr.includes(str)) {
    arr = arr.replace(str, "");
  }

  return arr;
}
console.log(twoStrings("This is some text.", "is"));
