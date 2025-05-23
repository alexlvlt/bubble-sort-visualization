import { ArrayValuesStates, type SortItem } from "../types/types.ts";

export function* bubbleSort(array: SortItem[]): Generator<SortItem[], void, unknown> {
  const copyArr = [...array];
  let swapped = false;
  let counter = 0;

  do {
    swapped = false;
    counter++;

    for (let i = 0; i < copyArr.length - counter; i++) {
      copyArr[i].state = ArrayValuesStates.Checked;
      copyArr[i + 1].state = ArrayValuesStates.Checked;
      yield [...copyArr];

      if (copyArr[i].value > copyArr[i + 1].value) {
        swapped = true;
        copyArr[i].state = ArrayValuesStates.First;
        copyArr[i + 1].state = ArrayValuesStates.Second;
        [copyArr[i], copyArr[i + 1]] = [copyArr[i + 1], copyArr[i]];
      }

      yield [...copyArr];
      copyArr[i].state = ArrayValuesStates.Off;
      copyArr[i + 1].state = ArrayValuesStates.Off;
    }
  } while (swapped);
}
