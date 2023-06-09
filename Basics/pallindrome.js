const isPal = (num) => {
  let reversedNum = Number(num.toString().split("").reverse().join(""));
  return reversedNum;
};
console.log(isPal("122"));
