const addOne = x => x + 1;
const addOneThunk = x => () => addOne(x);

// function addOneThunk(x) {
//     const thunk = () => addOne(x);
//     return thunk;
// } 

setTimeout(() => {
    const value = 1;
    const fn = addOneThunk(value);
   	console.log(fn());	// 2
}, 1000);