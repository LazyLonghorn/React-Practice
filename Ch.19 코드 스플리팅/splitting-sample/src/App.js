import logo from './logo.svg';
import './App.css';

function App() {

  const onClick = () => {
    // 무조건 main 빌드 파일에 포함된다.
    // notify();

    import('./notify').then(result => result.default());    // JS 함수 비동기 로딩
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
