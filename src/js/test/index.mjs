// All tests should run here

import { testEurToUsd, testUsdToEur } from "./currency.test.mjs";
import {
  testAdd,
  testDivide,
  testMultiply,
  testSubtract,
} from "./math.test.mjs";
import { testCapitalize, testReverse } from "./strings.test.mjs";

function doTests() {
  try {
    testAdd(2, 2, 4);
    testSubtract(14, 7, 7);
    testMultiply(2, 3, 6);
    testDivide(10, 2, 5);
    testEurToUsd(0.86, 1);
    testUsdToEur(1, 0.86);
    testReverse("pernille", "ellinrep");
    testCapitalize("pernille", "Pernille");
  } catch (e) {
    console.log(e);
    throw new Error("test failed");
  }
}

doTests();
