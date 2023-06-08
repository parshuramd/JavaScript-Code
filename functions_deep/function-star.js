const foo = function* () {
  yield "I ";
  yield "am ";
  yield "Ram";
};

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
