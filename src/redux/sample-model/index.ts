import { SampleState, SET_ITEM, REMOVE_ITEM, SampleActionTypes } from './types';

const initialState: SampleState = {
  listOfSampleItems: [],
};

export const sampleReducer = (state = initialState, action: SampleActionTypes): SampleState => {
  switch (action.type) {
    case SET_ITEM:
      return {
        listOfSampleItems: [...state.listOfSampleItems, action.payload],
      };
    case REMOVE_ITEM:
      return {
        listOfSampleItems: state.listOfSampleItems.filter(
          item => item.creationTimestamp !== action.payload.creationTimestamp
        ),
      };
    default:
      return state;
  }
};
