const loggerMiddleware = store => next => action => {
    // 위와 동일한 구조
    // const loggerMiddleware = function loggerMiddleware(store) {
    //     return function(next) {
    //         return function(action) {

    //         }
    //     } 
    // }

    console.group(action && action.type);     // Action 타입으로 log 를 그룹화
    console.log('Prev : ', store.getState());
    console.log('Action : ', action);
    next(action);
    console.log('Next : ', store.getState());       // 업데이트 된 후
    console.groupEnd();

}

export default loggerMiddleware;