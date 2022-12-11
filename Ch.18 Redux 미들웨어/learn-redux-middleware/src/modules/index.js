import { combineReducers } from "redux";
import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';
import { all } from "redux-saga/effects";


const rootReducer = combineReducers(
    { 
        counter,
        sample,
        loading
    }
);

// Root Saga
export function* rootSaga() {
    yield all([counterSaga(), sampleSaga()]);     // 모든 Saga 를 통합
}

export default rootReducer;