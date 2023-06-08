function findMissingNumber(nums) {
  const n = nums.length + 1; // Calculate the expected length of the array

  // Calculate the expected sum of numbers from 1 to n
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the given array
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // The missing number is the difference between the expected sum and the actual sum
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

const input = [1, 3, 4, 5, 6];
const missingNumberResult = findMissingNumber(input);
console.log(missingNumberResult);
