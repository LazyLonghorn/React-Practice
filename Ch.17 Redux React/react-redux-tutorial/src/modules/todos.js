import { createAction, handleActions } from 'redux-actions';

// Action
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// Action Constructor
export const changeInput = createAction(CHANGE_INPUT);
export const insert = createAction(INSERT);
// export const insert = createAction(INSERT, text => {
//     return {
//         id: id++,
//         text,
//         done: false,
//     }
// });
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);


const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: 'Redux Basic',
            done: true
        },
        {
            id: 2,
            text: 'Redux Use',
            done: false
        },
    ]
}

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => (
            {
                ...state,
                input
            }
        ),
        [INSERT]: (state, { payload: todo }) => (
            {
                ...state,
                todos: state.todos.concat(todo)
            }
        ),
        [TOGGLE]: (state, { payload: id }) => (
            {
                ...state,
                todos: state.todos.map((todo) => (
                    todo.id === id ? {...todo, done: !todo.done} : todo
                ))
            }
        ),
        [REMOVE]: (state, { payload: id }) => (
            {
                ...state,
                todos: state.todos.filter((todo) => (
                    todo.id !== id
                ))
            }
        ),
        
        
    },
    initialState
);

export default todos;