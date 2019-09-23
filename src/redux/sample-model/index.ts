import { SampleState, SET_ITEM, REMOVE_ITEM, SampleActionTypes } from './types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
        listOfSampleItems: state.listOfSampleItems.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const fetchData = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => useDispatch()({ type: SET_ITEM, payload: json }));
  });
};
