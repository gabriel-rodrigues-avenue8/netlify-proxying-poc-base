import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Base app
        </p>
        <a
          className="App-link"
          href="/sub?token=123abc"
        >
          Go to sub-app
        </a>
      </header>
    </div>
  );
}

export default App;
