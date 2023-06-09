function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  const sqrt = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(29));

function printLimit(limit) {
  const arr = [];
  for (let i = 2; i < limit; i += 1) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}
printLimit(10);
