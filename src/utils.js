export function getSum(a, b) {
  return a + b;
}

export let a = "a1";
export const b = {};

export default getSum;

const array = ["john", "kate"];
export const [john, kate] = array;
// export const john = array[0]

const obj = { n: "name", k: "kate" };
export const { n, k } = obj;
