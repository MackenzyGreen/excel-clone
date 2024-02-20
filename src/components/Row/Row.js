import RowHeaderCell from "../RowHeaderCell/RowHeaderCell";
import InputCell from "../InputCell/InputCell";

import './Row.css';
import { useMemo } from "react";

const Row = ({ numRows, columns}) => useMemo(() => (
    [...Array(numRows)].map((_, i) => (
        <div className="row">
            <RowHeaderCell title={i+1} />
            {columns.map((c) => (c !== '' && <InputCell column={c} row={i} />))}
        </div>
    ))
), [numRows, columns])

export default Row;