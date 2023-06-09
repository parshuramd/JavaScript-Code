const str = 'Parshu1996'; // \r\n
// for loop
let capCount = 0;
let numCount = 0;
for (let i = 0; i < str.length; i += 1) {
  const char = str[i];
  if (char >= 'A' && char <= 'Z') {
    capCount += 1;
  }
  if (char >= '0' && char <= '9') {
    numCount += 1;
  }
}
console.log(capCount, numCount);
// regular expressions
const capitalCount = str.match(/[A-Z]/g || []).length;
const numberCount = str.match(/[0-9]/g || []).length;
console.log(capitalCount, numberCount);
