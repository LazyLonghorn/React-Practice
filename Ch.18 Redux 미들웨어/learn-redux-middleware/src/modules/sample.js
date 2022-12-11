// import { handleActions } from 'redux-actions';
// import * as api from '../lib/api';
// import createRequestThunk from '../lib/createRequestThunk';

// const GET_POST = 'sample/GET_POST';
// const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// const GET_USERS = 'sample/GET_USERS';
// const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// export const getPost = createRequestThunk(GET_POST, api.getPost);
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// // export const getPost = id => async dispatch =>  {
// //     dispatch( {type: GET_POST} );       // request Start
// //     try {
// //         const res = await api.getPost(id);

// //         let data = res.data;
// //         dispatch(
// //             {
// //                 type: GET_POST_SUCCESS,
// //                 payload: data
// //             }
// //         );
// //     } catch(e) {
// //         dispatch(
// //             {
// //                 type: GET_POST_FAILURE,
// //                 payload: e,
// //                 error: true
// //             }
// //         );

// //         throw e;        // 나중에 컴포넌트 단에서 에러 조회 가능
// //     }
// // }

// // export const getUsers = id => async dispatch =>  {
// //     dispatch( {type: GET_USERS} );       // request Start
// //     try {
// //         const res = await api.getUsers(id);
        
// //         let data = res.data;
// //         dispatch(
// //             {
// //                 type: GET_USERS_SUCCESS,
// //                 payload: data
// //             }
// //         );
// //     } catch(e) {
// //         dispatch(
// //             {
// //                 type: GET_USERS_FAILURE,
// //                 payload: e,
// //                 error: true
// //             }
// //         );

// //         throw e;        // 나중에 컴포넌트 단에서 에러 조회 가능
// //     }
// // }

// const initialState = {
//     // loading: {
//     //     GET_POST: false,
//     //     GET_USERS: false
//     // },
//     post: null,
//     users: null
// }

// const sample = handleActions(
//     {
//         [GET_POST_SUCCESS]: (state, action) => {
//             return {
//                 ...state,
//                 post: action.payload
//             }
//         },
//         [GET_USERS_SUCCESS]: (state, action) => (
//             {
//                 ...state,
//                 users: action.payload
//             }
//         ),
//     }
//     , initialState
// );


// export default sample;

// redux-saga
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import createRequestSaga from '../lib/createRequestSaga';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = createAction(GET_POST);    // createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

// function* getPostSaga(action) {
//     // 파라미터로 action 정보를 받아올 수 있다.

//     yield put(startLoading(GET_POST));

//     try {
//         // call 함수는 Promise 를 반환하는 함수를 호출하고 기다릴 수 있음.
//         // 첫 번째 파라미터는 함수, 두 번째는 함수에 넣을 인수이다.
//         const post = yield call(api.getPost, action.payload);       // api.getPost(action.payload)
        
//         let data = post.data;
//         yield put(
//             {
//                 type: GET_POST_SUCCESS,
//                 payload: data,
//             }
//         )
//     } catch(e) {
//         yield put(
//             {
//                 type: GET_POST_FAILURE,
//                 payload: e,
//                 error: true
//             }
//         )
//     }

//     yield put(finishLoading(GET_POST));
// }

// function* getUsersSaga() {
//     // 파라미터로 action 정보를 받아올 수 있다.

//     yield put(startLoading(GET_USERS));

//     try {
//         // call 함수는 Promise 를 반환하는 함수를 호출하고 기다릴 수 있음.
//         // 첫 번째 파라미터는 함수, 두 번째는 함수에 넣을 인수이다.
//         const users = yield call(api.getUsers);
        
//         let data = users.data;
//         yield put(
//             {
//                 type: GET_USERS_SUCCESS,
//                 payload: data,
//             }
//         )
//     } catch(e) {
//         yield put(
//             {
//                 type: GET_USERS_FAILURE,
//                 payload: e,
//                 error: true
//             }
//         )
//     }

//     yield put(finishLoading(GET_USERS));
// }

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
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