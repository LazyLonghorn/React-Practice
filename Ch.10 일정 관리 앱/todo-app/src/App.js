import { Fragment, useState, useRef, useCallback } from "react";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoTemplate from "./TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Recat Basic',
      checked: true,
    },
    {
      id: 2,
      text: 'Javascript Basic',
      checked: true,
    },
    {
      id: 3,
      text: 'Todo App',
      checked: false,
    }
  ]);

  const nextId = useRef(4);
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      }

      setTodos(todos.concat(todo));
      nextId.current += 1;

    }, [todos]
  );

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const onToggle = useCallback(id => {
    setTodos(todos.map(
      todo => todo.id === id ? {...todo, checked: !todo.checked } : todo));
  } , [todos]);

  return (
    <Fragment>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </Fragment>
  );
}

export default App;
