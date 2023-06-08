const set = new Set([1, 1, 2, 3, 4, 5]);
const intersection = [4, 3, 5].filter((el) => set.has(el));
console.log(intersection);
