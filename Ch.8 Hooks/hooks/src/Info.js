// import React, {useState, useEffect} from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');

//     const onchangeName = (e) => {
//         setName(e.target.value);
//     } 

//     const onchangeNickname = (e) => {
//         setNickname(e.target.value);
//     } 

//     useEffect(() => {
//         console.log('Rendering Finish');
//         console.log({name, nickname});

//         return () => {
//             console.log('cleanup');
//         }
//     }, []);

//     return (
//         <>
//             <div>
//                 <input value={name} onChange={onchangeName}/>
//                 <input value={nickname} onChange={onchangeNickname}/>    
//             </div> 
//             <div>
//                 <div>
//                     <b>Name : </b> {name}
//                 </div>
//                 <div>
//                     <b>Nickname : </b> {nickname}
//                 </div>
//             </div> 
//         </>
//     );
// };

// export default Info;


// useReducer, CustomHooks
import React, {useReducer} from 'react';
import useInputs from './useInputs';

// const reducer = (state, action) => {
//     return {
//         ...state,
//         [action.name]: action.value
//     }
// }

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    })
    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    // });

    const {name, nickname} = state; 

    // const onChange = (e) => {
    //     dispatch(e.target);        
    // } 

    return (
        <>
            <div>
                <input name='name' value={name} onChange={onChange}/>
                <input name='nickname' value={nickname} onChange={onChange}/>    
            </div> 
            <div>
                <div>
                    <b>Name : </b> {name}
                </div>
                <div>
                    <b>Nickname : </b> {nickname}
                </div>
            </div> 
        </>
    );
};

export default Info;