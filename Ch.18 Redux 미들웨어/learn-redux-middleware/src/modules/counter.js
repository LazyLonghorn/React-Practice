import { createAction, handleAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creator
/**
 * createActions 의 경우, 객체 형태로 return 함
 * {counter/INCREASE : ActionFunction<Any>}
 *  
 * export const increase = createActions(INCREASE);
 */

export const increase = createAction(INCREASE);         // increase = () => ( {type: INCREASE} )
export const decrease = createAction(DECREASE);

const initialState = 0;


// Thunk 함수 예시
/**
 * Thunk 함수 예시
 * 
 *   const add = x => x + 1;
 *   const addOneThunk = x => () => add(x);
 *   console.log(addOneThunk);		    // x => () => add(x)
 *   console.log(addOneThunk(1))	        // () => add(x)
 *   console.log(addOneThunk(1)());		// 2
 *  
 */

export const increaseAsync = () => dispatch => {
    // dispatch(increase());       // 이 동작도 가능
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
};
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

// redux-thunk 에서 호출하는 함수는 increaseAsync 가 리턴해주는 [dispatch => ()] 이다.

const counter = handleActions(
    {
        [INCREASE]: state => state + 1
        , [DECREASE]: state => state - 1
    }
    , initialState
);

export default counter;