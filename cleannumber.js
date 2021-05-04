function cleanNumber(str) {
  if (str[0] === "+") {
    str = str.substring(1, str.length);
  }
  if (str.includes(" ")) {
    let probelIndex = str.indexOf(" ");
    str =
      str.substring(0, probelIndex) +
      str.substring(probelIndex + 1, str.length);
  }
  if (str.length < 10 || str.length > 10) {
    return "Bad Number";
  }
  return str;
}
console.log(cleanNumber("+000898+9562"));
