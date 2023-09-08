import logo from './logo.svg';
import './App.css';
import VerticalTabs from './components/TabPanel';
import info from './components/info.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {VerticalTabs(info)}
      </header>
    </div>
  );
}

export default App;
