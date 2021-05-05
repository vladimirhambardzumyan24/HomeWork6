function toWords(string) {
  let th = ["", "thousand"];
  let dg = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let tn = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tw = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  string = string.toString();
  string = string.replace(/[\, ]/g, "");
  if (string != parseFloat(string)) return "not a number";
  let numMaxLength = 6;
  let arr = string.split("");
  let str = "";
  let boolItem = false;
  for (let i = 0; i < numMaxLength; i++) {
    if ((numMaxLength - i) % 3 == 2) {
      if (arr[i] == "1") {
        str += tn[Number(arr[i + 1])] + " ";
        i++;
        boolItem = true;
      } else if (arr[i] != 0) {
        str += tw[arr[i] - 2] + " ";
        boolItem = true;
      }
    } else if (arr[i] != 0) {
      str += dg[arr[i]] + " ";
      if ((numMaxLength - i) % 3 == 0) str += "hundred ";
      boolItem = true;
    }
    if ((numMaxLength - i) % 3 == 1) {
      if (boolItem) str += th[(numMaxLength - i - 1) / 3] + " ";
      boolItem = false;
    }
  }

  if (numMaxLength < string.length) {
    str = "Big Number";
  }
  return str.replace(/\s+/g, " ");
}
console.log(toWords(585582));
