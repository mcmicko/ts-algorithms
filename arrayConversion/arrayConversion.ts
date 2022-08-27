export function arrayConversion(inputArray: number[]): number {
  let isOdd = true;
  console.log(inputArray);
  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    console.log(inputArray);
    isOdd = !isOdd;
  }

  console.log(inputArray);
  return inputArray[0];
}

function sumProduct(nums: number[], isOdd: boolean): number[] {
  const sumProducts: number[] = [];

  if (isOdd) {
    for (let i = 0; i < nums.length; i += 2) {
      console.log(sumProducts);
      sumProducts.push(nums[i] + nums[i + 1]);
      console.log(sumProducts);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      console.log(sumProducts);
      sumProducts.push(nums[i] * nums[i + 1]);
    }
  }
  console.log(sumProducts);
  return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
