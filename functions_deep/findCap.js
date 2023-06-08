let str = "hbchsdgu^HGDJ99837hhbfjhCCF000";
let capCount = 0;
let numCount = 0;
// for loop if else
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char >= "A" && char <= "Z") {
    capCount++;
  } else if (char >= "0" && char <= "9") {
    numCount++;
  }
}
console.log(capCount, numCount);
// regular expression
let capitalCount = (str.match(/[A-Z]/g) || []).length;
let numberCount = (str.match(/[0-9]/g) || []).length;

console.log("Number of capital letters:", capitalCount);
console.log("Number of numbers:", numberCount);
// reduce method
let { capitalCount1, numberCount1 } = Array.from(str).reduce(
  (counts, char) => {
    if (char >= "A" && char <= "Z") {
      counts.capitalCount1++;
    } else if (char >= "0" && char <= "9") {
      counts.numberCount1++;
    }
    return counts;
  },
  { capitalCount1: 0, numberCount1: 0 }
);

console.log("Number of capital letters:", capitalCount1);
console.log("Number of numbers:", numberCount1);

// filter method
let capitalCount2 = str
  .split("")
  .filter((char) => char >= "A" && char <= "Z").length;
let numberCount2 = str
  .split("")
  .filter((char) => char >= "0" && char <= "9").length;

console.log("Number of capital letters:", capitalCount2);
console.log("Number of numbers:", numberCount2);
