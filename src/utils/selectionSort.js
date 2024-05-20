import { delay } from "./helpers";

export async function selectionSort(
  array,
  setArray,
  delayTime,
  setCompared,
  setSwap,
  setIsSorting
) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      setCompared([minIndex, j]);
      await delay(delayTime);

      if (array[j] < array[minIndex]) {
        minIndex = j;
        setSwap([i, minIndex]);
        await delay(delayTime);
      }

      setCompared([]);
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      setArray([...array]);
      setSwap([i, minIndex]);
      await delay(delayTime);
      setSwap([]);
    }
  }
  setIsSorting(false);
  return array;
}
