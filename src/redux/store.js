import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import covidSlice from './Diseases/diseasesSlice';

const reducers = combineReducers({
  covidTracker: covidSlice,
});

const store = configureStore({
  reducer: reducers,
}, applyMiddleware(thunk));

export default store;
