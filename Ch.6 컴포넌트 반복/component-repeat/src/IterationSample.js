import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'A' },
        { id: 2, text: 'B' },
        { id: 3, text: 'C' },
        { id: 4, text: 'D' },
    ]); 

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => {
        setInputText(e.target.value);
    }
    
    const onClick = () => {
        const nextNames = [...names, {id: nextId, text: inputText}];
        setNames(nextNames);
        setInputText('');
        setNextId(nextId + 1);
    }
    
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={()=> {onRemove(name.id)}}>{name.text}</li>);
    
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>Add Item</button>
            <ul>
                {nameList}
            </ul>
        </>
    );
};

export default IterationSample;