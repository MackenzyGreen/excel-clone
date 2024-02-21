import { useMemo } from 'react';
import { Provider } from 'react-redux';

import Grid from './screens/Grid/Grid';
import store from './store';

import './App.css';

function App() {

  return useMemo (() => (
    <Provider store={store}>
      <div className="App">
        <Grid />
      </div>
    </Provider>
  ), [])
}

export default App;
