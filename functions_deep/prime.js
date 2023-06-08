function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  let sqrt = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(29));

function printLimit(limit) {
  let arr = [];
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printLimit(10);
