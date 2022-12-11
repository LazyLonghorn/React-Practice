// import { createAction, handleAction, handleActions } from 'redux-actions';

// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';

// // Action Creator
// /**
//  * createActions 의 경우, 객체 형태로 return 함
//  * {counter/INCREASE : ActionFunction<Any>}
//  *  
//  * export const increase = createActions(INCREASE);
//  */

// export const increase = createAction(INCREASE);         // increase = () => ( {type: INCREASE} )
// export const decrease = createAction(DECREASE);

// const initialState = 0;


// // Thunk 함수 예시
// /**
//  * Thunk 함수 예시
//  * 
//  *   const add = x => x + 1;
//  *   const addOneThunk = x => () => add(x);
//  *   console.log(addOneThunk);		    // x => () => add(x)
//  *   console.log(addOneThunk(1))	        // () => add(x)
//  *   console.log(addOneThunk(1)());		// 2
//  *  
//  */

// export const increaseAsync = () => dispatch => {
//     // dispatch(increase());       // 이 동작도 가능
//     setTimeout(() => {
//         dispatch(increase());
//     }, 1000);
// };
// export const decreaseAsync = () => dispatch => {
//     setTimeout(() => {
//         dispatch(decrease());
//     }, 1000);
// };

// // redux-thunk 에서 호출하는 함수는 increaseAsync 가 리턴해주는 [dispatch => ()] 이다.

// const counter = handleActions(
//     {
//         [INCREASE]: state => state + 1
//         , [DECREASE]: state => state - 1
//     }
//     , initialState
// );

// export default counter;


// redux-saga
import { createAction, handleAction, handleActions } from 'redux-actions';
import { delay, put, select, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);         // increase = () => ( {type: INCREASE} )
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC);
export const decreaseAsync = createAction(DECREASE_ASYNC);

function* increaseSaga() {
    yield delay(1000);
    yield put(increase());      // Action Dispatch

    // select : Saga 내부의 state 정보를 조회하는 방법
    const number = yield select(state => {
        return state.counter        // counter 의 State
    });
    console.log(`Now number : ${number}`);
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());      // Action Dispatch
}

export function* counterSaga() {
    /**
     * throttle : 지정한 시간 내 한 번만 수행
     */
    yield throttle(3000, INCREASE_ASYNC, increaseSaga);
    
    // 들어오는 모든 액션에 대해 특정 작업을 처리
    // yield takeEvery(INCREASE_ASYNC, increaseSaga);

    // 기존에 진행 중이던 작업을 취소하고 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => {
            return state + 1; 
        }
        , [DECREASE]: state => state - 1
    }
    , initialState
);

export default counter;