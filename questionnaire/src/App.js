import logo from './kivakoulu.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to wellbeing questionnaire!
        </p>
        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=GJDNkVDGM_s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feeling down? Click to see funny video!
        </a>
      </header>
    </div>
  );
}

export default App;
