const str = 'hbchsdgu^HGDJ99837hhbfjhCCF000';
let capCount = 0;
let numCount = 0;
// for loop if else
for (let i = 0; i < str.length; i += 1) {
  const char = str[i];
  if (char >= 'A' && char <= 'Z') {
    capCount += 1;
  } else if (char >= '0' && char <= '9') {
    numCount += 1;
  }
}
console.log(capCount, numCount);
// regular expression
const capitalCount = (str.match(/[A-Z]/g) || []).length;
const numberCount = (str.match(/[0-9]/g) || []).length;

console.log('Number of capital letters:', capitalCount);
console.log('Number of numbers:', numberCount);
// reduce method
const { capitalCount1, numberCount1 } = Array.from(str).reduce(
  (counts, char) => {
    if (char >= 'A' && char <= 'Z') {
      // eslint-disable-next-line no-param-reassign
      counts.capitalCount1 += 1;
    } else if (char >= '0' && char <= '9') {
      // eslint-disable-next-line no-param-reassign
      counts.numberCount1 += 1;
    }
    return counts;
  },
  // eslint-disable-next-line comma-dangle
  { capitalCount1: 0, numberCount1: 0 }
);

console.log('Number of capital letters:', capitalCount1);
console.log('Number of numbers:', numberCount1);

// filter method
const capitalCount2 = str
  .split('')
  .filter((char) => char >= 'A' && char <= 'Z').length;
const numberCount2 = str
  .split('')
  .filter((char) => char >= '0' && char <= '9').length;

console.log('Number of capital letters:', capitalCount2);
console.log('Number of numbers:', numberCount2);
