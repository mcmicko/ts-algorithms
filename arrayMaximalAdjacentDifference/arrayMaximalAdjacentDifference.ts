export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let maxDiff = Math.abs(inputArray[0] - inputArray[1]);
  maxDiff;

  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i - 1]);
    let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
    absoluteDiff;

    maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;

    // if (absoluteDiff > maxDiff) {
    //   maxDiff = absoluteDiff;
    //   maxDiff;
    // }
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
