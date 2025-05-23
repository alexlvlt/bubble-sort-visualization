import { ArrayValuesStates, type SortItem } from "../types/types.ts";

export function generateArray(): SortItem[] {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr.push({
      value: Math.floor(Math.random() * 100),
      state: ArrayValuesStates.Off,
    });
  }

  return arr;
}
