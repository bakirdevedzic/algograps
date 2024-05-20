import { delay } from "./helpers";

export async function insertionSort(
  array,
  setArray,
  delayTime,
  setCompared,
  setSwap,
  setIsSorting
) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    setCompared([j, i]);

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      setArray([...array]);
      setSwap([j, j + 1]);
      await delay(delayTime);
      j = j - 1;
      setCompared([j, i]);
    }
    array[j + 1] = key;
    setArray([...array]);
    await delay(delayTime);
  }
  setSwap([]);
  setCompared([]);
  setIsSorting(false);
  return array;
}
