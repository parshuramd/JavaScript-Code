const foo = function* () {
  yield 'I ';
  yield 'am ';
  yield 'Ram';
};

let str = '';
// eslint-disable-next-line no-restricted-syntax
for (const val of foo()) {
  str += val;
}

console.log(str);
