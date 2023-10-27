import { add, divide, multiply, subtract } from "../math.mjs";

export function testAdd(a, b, sum) {
  const res = add(a, b);
  if (sum === res) {
    console.log("ok");
  } else {
    throw new Error(`Expect the sum of ${a} and ${b} to be ${sum}, not ${res}`);
  }
}

export function testSubtract(a, b, sum) {
  const res = subtract(a, b);
  if (sum === res) {
    console.log("subtract is correct");
  } else {
    throw new Error(`Expect the sum of ${a} and ${b} to be ${sum}, not ${res}`);
  }
}

export function testMultiply(a, b, sum) {
  const res = multiply(a, b);
  if (sum === res) {
    console.log("muliplying is correct");
  } else {
    throw new Error(`Expect the sum of ${a} and ${b} to be ${sum}, not ${res}`);
  }
}

export function testDivide(a, b, sum) {
  const res = divide(a, b);
  if (sum === res) {
    console.log("divided is correct");
  } else {
    throw new Error(`Expect the sum of ${a} and ${b} to be ${sum}, not ${res}`);
  }
}
