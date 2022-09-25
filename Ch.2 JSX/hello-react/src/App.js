import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import MyComponent from './MyComponent';
import MyFuncComponent from './MyFuncComponent';
import Counter from './Counter';
import Say from './Say';

function App() {
  return (
    // <Fragment>
    //   <h1>Hello</h1>
    // </Fragment>
    // <div>
    //   <MyComponent code={4}/>
    //   <br/>
    //   <MyFuncComponent code={3}>Func Children</MyFuncComponent>
    // </div>

    <Fragment>
      {/* <Counter/> */}
      <Say/>
    </Fragment>
  );
}

export default App;
