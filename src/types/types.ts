export enum ArrayValuesStates {
  First = "first",
  Second = "second",
  Checked = "checked",
  Off = "off",
}

export interface SortItem {
  value: number;
  state: ArrayValuesStates;
}

