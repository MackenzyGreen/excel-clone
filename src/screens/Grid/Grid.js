import { useMemo } from "react";

import ColumnHeaderCell from "../../components/ColumnHeaderCell/ColumnHeaderCell";
import Row from "../../components/Row/Row";

import { columns } from '../../constants/constants';

import './Grid.css';

const Grid = () => {
    return useMemo(() => (
        <>
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
      </>
    ), [])
}

export default Grid;