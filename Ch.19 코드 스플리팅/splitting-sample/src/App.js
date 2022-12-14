// JS 함수 비동기 로딩

// import logo from './logo.svg';
// import './App.css';

// function App() {

//   const onClick = () => {
//     // 무조건 main 빌드 파일에 포함된다.
//     // notify();

//     import('./notify').then(result => result.default());    // JS 함수 비동기 로딩
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React!</p>
//       </header>
//     </div>
//   );
// }

// export default App;


// state 를 통한 Split

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     SplitMe: null
//   }

//   handleClick = async () => {
//     // 동적으로 Import
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe: loadedModule.default
//     });

//   }
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>Hello React!</p>
//           { SplitMe && <SplitMe/> } 
//         </header>
//       </div>
//     );
//   }
// }

// export default App;


// lazy, Suspense
// import logo from './logo.svg';
// import './App.css';
// import React, { Suspense, useState } from 'react';

// const SplitMe = React.lazy(() => import('./SplitMe'));

// function App() {

//   const [visible, setVisible] = useState(false);

//   const onClick = () => {
//     setVisible(true);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React!</p>

//         <Suspense fallback={<div>loading....</div>}>
//             {visible && <SplitMe/>}
//         </Suspense>
//       </header>
//     </div>
//   );
// }

// export default App;


// loadable/component
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import loadadble from '@loadable/component';

const SplitMe = loadadble(() => import('./SplitMe'), {
  fallback: <div>loading....</div>    // loading 중에 보이는 UI
});

function App() {

  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  }

  const onMouseOver = () => {
    SplitMe.preload();    // 미리 JS 를 로딩한다. ( 렌더링은 X )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        
        {visible && <SplitMe/>}
      </header>
    </div>
  );
}

export default App;