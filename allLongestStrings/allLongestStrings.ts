export function allLongestStrings(inputArray: string[]): string[] {
  const biggest = inputArray.map((e) => e.length).sort((a, b) => b - a)[0];
  return inputArray.filter((e: string) => e.length >= biggest);
}

export function allLongestStrings2(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords: string[] = [];

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings2(["aba", "aa88", "98ad", "vcd", "aba"]));
