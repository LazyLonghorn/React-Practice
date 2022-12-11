import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from "../modules/loading";

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(startLoading(type));

        try {
            const res = yield call(request, action.payload);

            let data = res.data;
            yield put(
                {
                    type: SUCCESS,
                    payload: data,
                }
            )

        } catch(e) {
            yield put(
                {
                    type: FAILURE,
                    payload: e,
                    error: true
                }
            )
        }
        
        yield put(finishLoading(type));
    };

}