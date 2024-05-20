export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateRandomArray(length = 20, min = 10, max = 100) {
  return Array.from({ length }, () => getRandomNumber(min, max));
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
