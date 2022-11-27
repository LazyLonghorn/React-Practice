import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    /**
     * number : state.counter.number
     * increase : dispatch(increase())
     * decrease : dispatch(decrease())
     */ 
    return (
        <Counter 
            number={number} 
            onIncrease={increase}
            onDecrease={decrease}
        />
    );
};

export default connect(
    state => (
        {
            /**
             * counter: 이름은 Root Reducer 에서 combineReducers 를 통해 만든 이름을 기준
             * number: 리듀서 (function counter()) 의 state.number
             */
            number: state.counter.number
        }
    ), 
    {
        increase,       // dispatch(increase())
        decrease        // dispatch(decrease())
    }   
)(CounterContainer);