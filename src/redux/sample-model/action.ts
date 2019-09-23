import { SampleItem, SET_ITEM, REMOVE_ITEM } from './types';

export const setItem = (newItem: SampleItem) => {
  return {
    type: SET_ITEM,
    payload: newItem,
  };
};

export const deleteMessage = (creationTimestamp: number) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      creationTimestamp,
    },
  };
};
