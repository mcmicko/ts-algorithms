// MOJ NACIN
export function addBorder(picture: string[]): string[] {
  picture.unshift("***");
  picture.push("***");
  return picture.map((e) => `*${e}*`);
}

function addBorder2(picture: string[]): string[] {
  const lengthOfWall = picture[0].length;
  let wall = "";

  for (let i = 0; i < lengthOfWall; i++) {
    wall = wall.concat("*");
  }

  picture.unshift("*".repeat(lengthOfWall));
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}
console.log(addBorder(["abc", "ded"]));

console.log(addBorder2(["abc", "ded"]));
