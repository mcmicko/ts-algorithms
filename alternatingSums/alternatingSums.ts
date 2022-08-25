export function alternatingSums(a: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;
  a.forEach((e, i) => {
    if (i % 2 === 0) {
      evenSum += e;
    } else {
      oddSum += e;
    }
  });
  return [evenSum, oddSum];
  // return a.filter((e,i) => e.indexOf(i%2))
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
