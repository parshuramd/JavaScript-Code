// let str = "nan ";
// let newStr = str.split("").reverse().join("");
// console.log(str === newStr);

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let reversedStr = '';
  for (let i = 0; i < cleanedStr.length; i += 1) {
    reversedStr = cleanedStr[i] + reversedStr;
  }
  return cleanedStr === reversedStr;
}
console.log(isPalindrome('nan'));
