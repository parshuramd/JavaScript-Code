const str = 'Parshuram';
// let newStr = str.split("").reverse().join("");
// console.log(newStr);

let newstr1 = '';
for (let i = 0; i < str.length; i += 1) {
  newstr1 = str[i] + newstr1;
}
console.log(newstr1);
