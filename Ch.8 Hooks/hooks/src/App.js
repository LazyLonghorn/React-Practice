// import React, { useState } from 'react';
// import { Fragment } from 'react';
// import Info from './Info';

// function App() {
//   // useState, useEffect
//   const [visible, setVisible] = useState(false);

//   return (
//     <Fragment>
//       <button 
//         onClick={() => {
//           setVisible(!visible)}}>
//           {visible ? 'Hide' : 'Visible'}
//       </button>
//       <hr/>
//       {visible && <Info/>}
//     </Fragment>
//   );
// }

// export default App;

// import React from 'react';
// import { Fragment } from 'react';
// import Counter from './Counter';

// function App() {
//   // useReducer
//   return (
//     <Fragment>
//       <Counter/>
//     </Fragment>
//   );
// }

// export default App;

import React from 'react';
import { Fragment } from 'react';
import Average from './Average';

function App() {
  // useMemo
  return (
    <Fragment>
      <Average/>
    </Fragment>
  );
}

export default App;
