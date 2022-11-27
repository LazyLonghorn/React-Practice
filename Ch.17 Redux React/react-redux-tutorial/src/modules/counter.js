import { createAction, handleActions } from 'redux-actions';

// Action
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Constructor
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

// Reducer
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ( 
            {   
                number: state.number + 1
            } 
        ),
        [DECREASE]: (state, action) => ( 
            {
                number: state.number - 1
            } 
        ),
    },
    initialState
);

export default counter;