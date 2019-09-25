import React, { useReducer, useContext } from 'react';

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

const Counter = () => {
  const [count, dispatch] = useContext(CountContext);

  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'set', count: 0 })}>reset</button>
    </div>
  );
};

export const Sample = () => (
  <>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
  </>
);
