import './App.css';
import HeaderCell from './components/ColumnHeaderCell/ColumnHeaderCell';
import { columns } from './constants/constants';

function App() {
  const renderRows = () => {
    /**
     * dual loop, first cell is header then second loop to populate cells
     */
  }

  return (
    <div className="App">
      <div className='columnHeaderContainer'>
        {
          columns.map((title, index) => (
            <HeaderCell title={title} key_id={`${title}-${index}`} />
          ))
        }
      </div>
      <div>
        { renderRows() }
      </div>
    </div>
  );
}

export default App;
