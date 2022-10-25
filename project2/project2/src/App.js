import logo from './logo.svg';
import './App.css';
import { UserProfile } from './UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<UserProfile/>
      </header>
    </div>
  );
}

export default App;
