import { finishLoading, startLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    const START_LOADING = 'loading/START_LOADING';

    return params => async dispatch => {
        dispatch({ type });
        dispatch(
            {
                type: START_LOADING,
                payload: type
            }
        );
        // dispatch(startLoading(type));      // dispatch(ActionCreate())

        try {
            const res = await request(params);
    
            let data = res.data;
            dispatch(
                {
                    type: SUCCESS,
                    payload: data
                }
            );
            dispatch(finishLoading(type));

        } catch(e) {
            dispatch(
                {
                    type: FAILURE,
                    payload: e,
                    error: true
                }
            );
            dispatch(finishLoading(type));
    
            throw e;        // 나중에 컴포넌트 단에서 에러 조회 가능
        }
    }
}