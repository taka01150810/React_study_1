import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./components/TestComponent";
import GetItemComponent from "./components/GetItemComponent";
import StyledComponent from "./components/StyledComponent";
import StyledUseStateProps from "./components/StyledUseStateProps";

function App() {
  return (
    <div className="App">
      <TestComponent />
      <GetItemComponent />
      <StyledComponent />
      <StyledUseStateProps />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reactテスト中です。
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
      </header>
    </div>
  );
}


export default App;

