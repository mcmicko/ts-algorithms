export function arrayPreviousLess(items: number[]): number[] {
  let lessThanList: number[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (items[i] > items[j]) {
        lessThanList.unshift(items[j]);
        break;
      } else if (j === 0) {
        lessThanList.unshift(-1);
      }
    }
  }

  return lessThanList;
}

function arrayPreviousLess2(items: number[]): number[] {
  const result = items.map((item: number, i: number) =>
    item > items[i - 1] ? items[i - 1] : -1
  );

  return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess2([3, 5, 2, 4, 5]));
