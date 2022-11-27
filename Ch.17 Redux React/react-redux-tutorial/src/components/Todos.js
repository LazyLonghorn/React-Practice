import React from 'react';

const TodoItem = ( {todo, onToggle, onRemove} ) => {
    return (
        <div>
            <input 
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.checked}
                readOnly={true}
            />
            <span style={ { textDecoration: todo.done ? 'line-through' : 'none'} }>
                {todo.text}
            </span>
            <button onClick={() => onRemove(todo.id)}>Remove</button>
        </div>
    );
};

const Todos = (
    {
        input,
        todos,
        onChangeInput,
        onInsert,
        onToggle,
        onRemove    
    }) => {

        let id = 3;
        const onSubmit = (e) => {
            e.preventDefault();
            
            // onInsert(input);
            onInsert(
                {
                    id: id++,
                    text: input,
                    done: false,
                }
            );
            onChangeInput('');   // Submit 후 초기화
        }
        
        const onChange = (e) => { onChangeInput(e.target.value) }

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        value={input}
                        onChange={onChange}
                    />
                    <button type='submit'>Submit</button>
                </form>

                {
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={onToggle}
                            onRemove={onRemove}
                        />
                    ))
                }
            </div>
        );
}

export default Todos;