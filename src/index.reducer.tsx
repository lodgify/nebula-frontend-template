import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state: number, action: any) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'set':
      return action.count;
    default:
      throw new Error('Unexpected action');
  }
};

export const CountContext = React.createContext<any>(1);

export const CountProvider: React.FC = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return <CountContext.Provider value={contextValue}>{children}</CountContext.Provider>;
};
