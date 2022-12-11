import { Fragment } from "react";
import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";

function App() {
  return (
    <Fragment>
      {/* <SampleContainer/> */}

      {/* redux-saga */}
      <CounterContainer/>   
      {/* <SampleContainer/> */}
    </Fragment>
  );
}

export default App;
