import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sampleReducer } from './sample-model/index';

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};
