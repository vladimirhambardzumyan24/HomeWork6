function findLongsString(str) {
  let currentMaxLongestSubstr = "";

  for (let i = 0; i < str.length; i++) {
    const currentActiveLetter = str[i];
    let longestSubstring = currentActiveLetter;
    let maxCountWithoutSpace = 0;
    for (let j = i + 1; j < str.length; j++) {
      const nextLetter = str[j];
      const isSpace = nextLetter === " ";
      if (isSpace) {
        longestSubstring += nextLetter;
        continue;
      } else if (longestSubstring.indexOf(nextLetter) !== -1) {
        break;
      } else {
        longestSubstring += nextLetter;
        maxCountWithoutSpace += 1;
      }
    }
    if (currentMaxLongestSubstr.length < maxCountWithoutSpace) {
      currentMaxLongestSubstr = longestSubstring;
    }
  }
  return currentMaxLongestSubstr;
}
console.log(findLongsString("there are no two words in the english language more harmful than \'good job\'.")
);
