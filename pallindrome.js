const isPalindrome = (num) => {
  let reverse = Number(num.toString().split("").reverse().join(""));
  if (num === reverse) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(3113));
