import { Provider } from 'react-redux';

import store from './store';
import ColumnHeaderCell from './components/ColumnHeaderCell/ColumnHeaderCell';
import Row from './components/Row/Row';
import { columns } from './constants/constants';

import './App.css';
import { useMemo } from 'react';

function App() {

  return useMemo (() => (
    <Provider store={store}>
      <div className="App">
        <div className='columnHeaderContainer'>
          {
            columns.map((title, index) => (
              <ColumnHeaderCell title={title} key_id={`${title}-${index}`} />
            ))
          }
        </div>
        <div className="rowsContainer">
          <Row numRows={20} columns={columns}/>
        </div>
      </div>
    </Provider>
  ), [])
}

export default App;
