import logo from "./logo.svg";
import Task1 from "./task1";
import "./App.css";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4 />
    </div>
  );
}

export default App;
