import RowHeaderCell from "../RowHeaderCell/RowHeaderCell";
import InputCell from "../InputCell/InputCell";

import './Row.css';

const Row = ({ numRows, columns }) => (
    [...Array(numRows)].map((_, i) => (
        <div className="row">
            <RowHeaderCell title={i+1} />
            {[...Array(columns.length)].map((c, i) => (<InputCell />))}
        </div>
    ))
)

export default Row;