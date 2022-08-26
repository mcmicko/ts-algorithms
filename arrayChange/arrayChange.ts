export function arrayChange(inputArray: number[]): number {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray);
    if (inputArray[i] >= inputArray[i + 1]) {
      console.log(inputArray);
      const difference = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      console.log(difference);
      count += difference;
    }
  }
  return count;
}

console.log(arrayChange([1, 1, 1]));
// console.log(arrayChange([1, 2, 3]));
// console.log(arrayChange([1, 2, 1, 3, 5]));
