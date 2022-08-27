export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let sum = 0;
  let max = 0;
  sum;
  for (let num of inputArray) {
    num;
    sum;
    sum = sum + num;
    sum;
  }
  max;
  sum;
  max = sum;
  max;
  for (let i = k; i < inputArray.length; i++) {
    i;
    inputArray;
    console.log(inputArray[i]);
    console.log(inputArray[i - k]);
    sum;
    // sum -= inputArray[i - k];
    sum -= 1;
    sum;
    // sum += inputArray[i];
    // sum += 1;
    sum;

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
