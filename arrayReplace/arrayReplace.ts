export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  inputArray.forEach((e, i) => {
    if (e === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  });

  return inputArray;
}

function arrayReplace2(a: number[], b: number, c: number): any {
  return a.map((num: number) => (num === b ? c : num));
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace2([1, 2, 1], 1, 3));
