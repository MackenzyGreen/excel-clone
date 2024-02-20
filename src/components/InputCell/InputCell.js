import { useSelector, useDispatch } from 'react-redux';

import { setCellData } from '../../slices/dataSlice';
import { defaultSizes } from '../../constants/constants';
import './InputCell.css';
import { useCallback, useMemo } from 'react';

const InputCell = ({ column,  row }) => {
    const cell = `${column}${row}`;
    const value = useSelector((state) => state?.data[cell]?.value);
    const width = useSelector((state) => state?.styles?.column[column] ? state?.styles?.column[column] : defaultSizes.width);
    const height = useSelector((state) => state?.styles?.row[row] ? state?.styles?.row[row] : defaultSizes.height);
    const dispatch = useDispatch();

    const getStyle = useMemo(() => (
       {
        width,
        height,
       } 
    ), [width, height])

    const handleInput = useCallback((e) => {
        dispatch(setCellData({ cell: cell, value: e.target.value }))
    }, [cell, dispatch])

    return useMemo(() => (
        <input 
            type="text" 
            className="inputCell" 
            value={value} 
            onChange={handleInput}
            style={getStyle}
        />
    ), [value, handleInput, getStyle])
};

export default InputCell;