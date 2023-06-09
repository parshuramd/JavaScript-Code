const str = 'Parshuram';
let reversedStr = '';
for (let i = 0; i < str.length; i += 1) {
  reversedStr = str[i] + reversedStr;
}
console.log(reversedStr);
