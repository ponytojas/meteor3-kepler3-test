import {
  combineReducers,
  createStore,
} from 'redux';

import keplerGlReducer from '@kepler.gl/reducers';

const initialState = {};
const reducers = combineReducers({
  keplerGl: keplerGlReducer,
});

// using createStore
export default createStore(
  reducers,
  initialState,
);
