function evenNumber(num1, num2) {
  let min = "";
  let max = "";
  let newStr;
  let newArr = [];
  if (num1 < num2) {
    min = num1;
    max = num2;
  } else {
    min = num2;
    max = num1;
  }

  bigFor: for (let i = min; i <= max; i++) {
    let item = String(i).split("");
    
    for (let j = 0; j < item.length; j++) {
      if (item[j] % 2 != 0) {
        continue bigFor;
      }
      newStr = i;
    }
    newArr.push(newStr);
    newStr = "";
  }
  return newArr;
}
console.log(evenNumber(19, 42));
