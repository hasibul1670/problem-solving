const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().trim();
  const reversedStr = cleanStr.split("").reverse().join("");
  console.log(cleanStr, reversedStr);
  return cleanStr === reversedStr;
};


console.log(isPalindrome("radar"));
