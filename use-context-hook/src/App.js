import logo from './logo.svg';
import './App.css';
import { theme, ThemeContext } from './providers/theme/theme';
import Header from './components/headers';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import ApplicationWrapper from './components/ApplicationWrapper';
function App() {

  const [selectedTheme, setSelectdTheme] = React.useState(theme.light)
  const handleOkClick = () => {

    setSelectdTheme(selectedTheme === theme.dark ? theme.light : theme.dark)

  }
  return (
    <ThemeContext.Provider value={selectedTheme}>
      <div className="App">
        <ApplicationWrapper>
          <img src={logo} className="App-logo" alt="logo" />

          <Header />

          <button onClick={handleOkClick}>OK</button>

        </ApplicationWrapper>
      </div>
    </ThemeContext.Provider>
  );

}

export default App;
