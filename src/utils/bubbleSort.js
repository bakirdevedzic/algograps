import { delay } from "./helpers";

export async function bubbleSort(
  array,
  setArray,
  delayTime,
  setCompared,
  setSwap,
  setIsSorting
) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      setCompared([j, j + 1]);
      await delay(delayTime);

      if (array[j] > array[j + 1]) {
        setSwap([j, j + 1]);
        await delay(delayTime);

        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        setArray([...array]);
        await delay(delayTime);
      }
      setCompared([]);
      setSwap([]);
    }
  }
  setIsSorting(false);
}
