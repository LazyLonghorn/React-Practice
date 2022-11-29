import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

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
        [CHANGE_INPUT]: (state, { payload: input }) =>(
            produce(state, draft => {
               draft.input = input; 
            })
        ),
        [INSERT]: (state, { payload: todo }) => (
            produce(state, draft => {
                draft.todos.push(todo);
            })            
        ),
        [TOGGLE]: (state, { payload: id }) => (
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done
            })
        ),
        [REMOVE]: (state, { payload: id }) => (
            produce(state, draft => {
                const idx = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(idx);
            })
        ),
        
        
    },
    initialState
);

export default todos;