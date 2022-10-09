import React from 'react';
import { 
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import cn from "classnames";

import "./TodoListItem.scss";

const TodoListItem = ( {todo, onRemove, onToggle, style} ) => {
    const {id, text, checked} = todo;

    console.log(`${id} : Rerendering!`);
    
    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoListItem'>
                <div className={ cn('checkbox', { 'checked': checked }) } onClick={() => onToggle(id)} >
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className='text'>{text}</div>
                </div>
                <div className='remove' onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>

    );
};

export default React.memo(TodoListItem, 
    (prevProps, nextProps) => {
        // console.log(prevProps); 
        // console.log(nextProps); 
        // console.log(prevProps.todo === nextProps.todo); 

        // 이전(Prev) 와 변경된(Next) 가 다른 경우에만 해당 컴포넌트에 리렌더링이 발생한다. ( false 인 경우, console.log(`${id} : Rerendering!`); )
        return prevProps.todo === nextProps.todo;
    }

);