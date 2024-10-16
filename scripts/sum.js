export function sum(...numbers) {
  return numbers.reduce((x, y) => x + y);
}

export async function asyncSum(...numbers) {
  return new Promise(resolve => resolve(numbers.reduce((x, y) => x + y)));
}
