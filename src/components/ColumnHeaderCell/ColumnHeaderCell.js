import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { defaultSizes } from '../../constants/constants';
import './ColumnHeaderCell.css';

const ColumnHeaderCell = ({title, key_id}) => {
    const width = useSelector((state) => state?.styles?.column[title] ? state?.styles?.column[title] : defaultSizes.width);

    const getStyle = useMemo(() => ({ minWidth: width }), [width]);

    return useMemo(() => {
        if (title === '') {
            return (
                <div 
                    className='headerCell-empty' 
                    key={key_id} 
                />
            )
        }
        return (
            <div className="headerContainer" style={getStyle}>
                <div 
                    className={`headerCell${title === '' ? '-empty' : ''}`} 
                    key={key_id}
                >
                    {title}
                </div>
                <span className='line' onMouseDown={dragMouseDown} />
            </div>
            
        )
    }, [getStyle, title, key_id, dragMouseDown]);
}

export default ColumnHeaderCell;