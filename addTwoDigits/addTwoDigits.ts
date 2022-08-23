export function addTwoDigits(n: any): number {
  let arr = n.toString().split("");
  return arr
    .map((e: string) => parseInt(e))
    .reduce((a: number, b: number) => a + b);
}

export function addTwoDigits2(n: any): number {
  const nums = n.toString().split("");

  return nums.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
}

export function addTwoDigits3(n: any): number {
  const nums = n.toString().split("");

  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));
console.log(addTwoDigits2(69));
console.log(addTwoDigits3(19));
