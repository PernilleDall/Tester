import { capitalize, reverse } from "../strings.mjs";

export function testReverse(str, reversed) {
  const res = reverse(str);
  if (reversed === res) {
    console.log("Reverse is working");
  } else {
    throw new Error("Reverse is not working");
  }
}

export function testCapitalize(str, capitalized) {
  const res = capitalize(str);
  if (capitalized === res) {
    console.log("capitalize is working");
  } else {
    throw new Error("capitalize is not working");
  }
}

/* export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
*/
