import { Fragment } from 'react';
import ColorBox from './components/ColorBox';
import SelectedColors from './components/SelectedColors';
import { ColorProvider } from './contexts/color';

function App() {
  return (
    <ColorProvider>
      <Fragment>
        <SelectedColors/>
        <ColorBox/>
      </Fragment>
    </ColorProvider>
  );
}

export default App;
