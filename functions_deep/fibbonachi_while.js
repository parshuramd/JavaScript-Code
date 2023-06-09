function fibonacciSequence(n) {
  const sequence = [0, 1];
  let i = 2;
  while (sequence[i - 1] + sequence[i - 2] <= n) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
    i += 1;
  }
  return sequence;
}
console.log(fibonacciSequence(100));
