import { Fragment } from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

function App() {
  return (
    <ColorContext.Provider value={{color: 'red'}}>
      <Fragment>
        <ColorBox/>
      </Fragment>
    </ColorContext.Provider>
  );
}

export default App;
