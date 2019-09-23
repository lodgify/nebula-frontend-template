export interface SampleItem {
  title: string;
  subtitle: string;
  creationTimestamp: number;
}

export interface SampleState {
  listOfSampleItems: SampleItem[];
}

export const SET_ITEM = 'SET_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

interface SetItemAction {
  type: typeof SET_ITEM;
  payload: SampleItem;
}

interface RemoveItemAction {
  type: typeof REMOVE_ITEM;
  payload: {
    creationTimestamp: number;
  };
}

export type SampleActionTypes = SetItemAction | RemoveItemAction;
