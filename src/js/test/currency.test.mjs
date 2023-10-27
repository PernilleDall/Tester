import { eurToUsd, usdToEur } from "../currency.mjs";

export function testEurToUsd(usdAmount, newPrice) {
  const res = eurToUsd(usdAmount);
  if (newPrice === res) {
    console.log("EurToUsd is working");
  } else {
    throw new Error(
      `${usdAmount}*${process.env.USD_TO_EUR_EXCHANGE_RATE} is expected to be ${eurToUsd}, not${res}`
    );
  }
}

export function testUsdToEur(eurAmount, newPrice) {
  const res = usdToEur(eurAmount);
  if (newPrice === res) {
    console.log("fuck yes");
  } else {
    throw new Error("Heckin crap");
  }
}
