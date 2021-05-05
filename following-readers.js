function followingReaders(obj) {
  let newArr = [];
  obj.sort(function (a, b) {
    return b.percent - a.percent;
  });
  for (let item in obj) {
    if (obj[item]["readStatus"]) {
      newArr.push(obj[item]["book"]);
    }
  }
  return newArr;
}
console.log(
  followingReaders([
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
  ])
);
