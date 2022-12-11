import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// export const getPost = id => async dispatch =>  {
//     dispatch( {type: GET_POST} );       // request Start
//     try {
//         const res = await api.getPost(id);

//         let data = res.data;
//         dispatch(
//             {
//                 type: GET_POST_SUCCESS,
//                 payload: data
//             }
//         );
//     } catch(e) {
//         dispatch(
//             {
//                 type: GET_POST_FAILURE,
//                 payload: e,
//                 error: true
//             }
//         );

//         throw e;        // 나중에 컴포넌트 단에서 에러 조회 가능
//     }
// }

// export const getUsers = id => async dispatch =>  {
//     dispatch( {type: GET_USERS} );       // request Start
//     try {
//         const res = await api.getUsers(id);
        
//         let data = res.data;
//         dispatch(
//             {
//                 type: GET_USERS_SUCCESS,
//                 payload: data
//             }
//         );
//     } catch(e) {
//         dispatch(
//             {
//                 type: GET_USERS_FAILURE,
//                 payload: e,
//                 error: true
//             }
//         );

//         throw e;        // 나중에 컴포넌트 단에서 에러 조회 가능
//     }
// }

const initialState = {
    // loading: {
    //     GET_POST: false,
    //     GET_USERS: false
    // },
    post: null,
    users: null
}

const sample = handleActions(
    {
        [GET_POST_SUCCESS]: (state, action) => {
            return {
                ...state,
                post: action.payload
            }
        },
        [GET_USERS_SUCCESS]: (state, action) => (
            {
                ...state,
                users: action.payload
            }
        ),
    }
    , initialState
);


export default sample;

