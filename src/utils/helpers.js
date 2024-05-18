export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateRandomArray(length = 20, min = 10, max = 300) {
  return Array.from({ length }, () => getRandomNumber(min, max));
}
