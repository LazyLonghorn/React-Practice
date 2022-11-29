import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';
import { changeInput, insert, toggle, remove } from '../modules/todos';

// const TodosContainers = (
//     {
//         input,
//         todos,
//         changeInput,
//         insert,
//         toggle,
//         remove    
//     }) => {
//         return (
//             <Todos 
//                 input={input} 
//                 todos={todos}
//                 onChangeInput={changeInput}
//                 onInsert={insert}
//                 onToggle={toggle}
//                 onRemove={remove}
//             />
//         );
// };

// export default connect(
//     state => (
//         {
//             input: state.todos.input,
//             todos: state.todos.todos
//         }
//     ),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove
//     }
// )(TodosContainers);


const TodosContainers = () => {
    // todos : state.todos
    const { input, todos } = useSelector( ({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }) );

    // const dispatch = useDispatch();

    // const onChangeInput = useCallback( input => (
    //     dispatch( changeInput(input) )
    // ), [dispatch]);

    // const onInsert = useCallback( todo => {
    //     dispatch( insert(todo) )
    // }, [dispatch] );

    // const onToggle = useCallback( id => (
    //     dispatch( toggle(id) )
    // ), [dispatch] );

    // const onRemove = useCallback( id => (
    //     dispatch( remove(id) )
    // ), [dispatch] );

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove]
        , []
    )

    return (
        <Todos 
            input={input} 
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
}

// Hooks 사용 시, 최적화 작업을 설정해야 한다. ( connect 는 자동으로 최적화 작업 진행 )
export default React.memo(TodosContainers);