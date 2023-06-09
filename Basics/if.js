/* eslint-disable operator-linebreak */
const a = 1;
if (a % 5 === 0 && a % 2 === 0) {
  for (let i = 0; i < 1000; i += 1) {
    if (
      i % 2 === 0 &&
      i % 3 === 0 &&
      i % 4 === 0 &&
      i % 5 === 0 &&
      i % 8 === 0
    ) {
      console.log(i);
    }
  }
} else {
  console.log(a);
}
