import React, { Component } from 'react';
import { Fragment } from 'react';
import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';

// function App() {
//   return (
//     <Fragment>
//       {/* <ValidationSample/> */}
//       <ScrollBox ref={(ref) => this.scrollBox = ref}/>
//       {/* <button onClick={() => this.scrollBox.scrollToBottom()}>
//         Scroll To Bottom
//       </button> */}
//     </Fragment>
     
//   );
// }

class App extends Component {
  render() {
    /**
     * 해당 ref 구조는 함수형 컴포넌트에서는 동작하지 않는다.
     */
    return (
      <Fragment>
        <ScrollBox ref={(ref) => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          Scroll To Bottom
        </button>
     </Fragment>
    )
  }
}

export default App;
