import logo from './logo.svg';
import './App.css';

import { useJitsu } from "@jitsu/react";

function App() {

  const { track } = useJitsu();


  const onClick = (btnName) => {
    track('btn_click', { btn: btnName }); // send btn_click event with button name payload on click
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => onClick('test_btn')}>Test button</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
