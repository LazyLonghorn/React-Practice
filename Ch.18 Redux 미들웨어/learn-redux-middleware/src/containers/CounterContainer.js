import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = ( {number, increaseAsync, decreaseAsync} ) => {
    return (
        <Counter 
            number={number} 
            onIncrease={increaseAsync} 
            onDecrease={decreaseAsync}
        />
    );
};

export default connect(
    state => (
        {
            number: state.counter,
        }
    ), 
    {
        // increase,       // dispatch(increase())
        // decrease        // dispatch(decrease())
        increaseAsync,
        decreaseAsync
    },
    // bindActionCreators({ increase, decrease }, dispatch)
    // dispatch => (
    //     {
    //         increase: () => dispatch(increase()),   // counter Redux 의 액션 생성함수 (increase)
    //         decrease: () => dispatch(decrease())    // counter Redux 의 액션 생성함수 (decrease)
    //     }
    // )
)(CounterContainer);