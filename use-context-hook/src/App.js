import logo from './logo.svg';
import './App.css';
import { theme, ThemeContext } from './providers/theme/theme';
import Header from './components/headers';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import ApplicationWrapper from './components/ApplicationWrapper';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'sub':
      return { count: state.count - 1 }
    default:
      return state.count
  }

}



function App() {

  const intialState = {
    count: 0
  }

  const [state, dispatch] = React.useReducer(reducer, intialState)

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

          {state.count}
          <button onClick={handleOkClick}>OK</button>

          <button onClick={() => dispatch({ type: "add" })}>+</button>
          <button onClick={() => dispatch({ type: "sub" })}>-</button>

        </ApplicationWrapper>
      </div>
    </ThemeContext.Provider>
  );

}

export default App;
