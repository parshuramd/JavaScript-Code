function generateFibonacci(n) {
  const sequence = [0, 1]; // Initialize the sequence with the first two numbers
  for (let i = 2; i < n; i += 1) {
    sequence.push(sequence[i - 1] + sequence[i - 2]); // Push the next number to the sequence
  }

  return sequence;
}

const n = 12;
const fibonacciSequence = generateFibonacci(n);
console.log(fibonacciSequence);
