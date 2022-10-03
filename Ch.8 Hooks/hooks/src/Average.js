// useMemo, useCallback, useRef

import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = (numbers) => {
    console.log('Get Average!');
    if(numbers.length === 0) { return 0; }

    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);     // 처음 렌더링 시에만 생성

    const onInsert = useCallback(() => {
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber(0);
        
        inputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>Add</button>

            <ul>
                {list.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))}
            </ul>  
            <div>
                {/* <b>Average : </b> {getAverage(list)} */}
                <b>Average : </b> {avg}
            </div>
        </>
    );
};

export default Average;