function multi(a, ...args) {
  return args.map((b) => a * b);
}
const num = [33, 44, 55];
console.log(multi(2, ...num));
