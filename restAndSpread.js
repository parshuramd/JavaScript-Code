// let array = [1, 2, 3, 4, 5];
// let newArray = [...array, 6, 7];
// console.log(array, newArray);

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const numbers = [1, 2, 4, 5, 6, 7, 8, 8, 9];
console.log(add(...numbers));
let a = 4;
let b = 5;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

const student = {
  studentName: "ParshuRam",
  age: 26,
  degree: "B.E",
};
const adult = { ...student };
console.log(student, adult);
adult.age = 30;
console.log(student, adult);
