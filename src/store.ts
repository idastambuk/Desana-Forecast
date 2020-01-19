import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {reducers} from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import {watchForecastSaga} from "./store/forecast.saga";

const saga = createSagaMiddleware();
const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(watchForecastSaga);
