import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import { getSetup } from './api/setup'
import { setupContext } from './context/SetupContext'
import Setup from './pages/Setup'
import { setupInterface } from './interfaces/setup.interface';

const App: React.FC = () => {
  const [setup, setSetup] = useState({} as setupInterface)

  useEffect(() => {
    fetchSetup()
  }, [])

  const fetchSetup = (): void => {
    getSetup()
    .then(({status, data}) => {
      setSetup(data)
    })
    .catch((err: Error) => console.log(err))
  }

  if (setup.setup) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
      </div>
    );
  } else {
    return (
      <div>
        <setupContext.Provider value={{setup, setSetup}}>
          <Setup />
        </setupContext.Provider>
      </div>
    );
  }
}

export default App;
