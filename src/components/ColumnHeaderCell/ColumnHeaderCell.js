import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { defaultSizes } from '../../constants/constants';
import './ColumnHeaderCell.css';

const ColumnHeaderCell = ({title, key_id}) => {
    const width = useSelector((state) => state?.styles?.column[title] ? state?.styles?.column[title] : defaultSizes.width);

    const getStyle = useMemo(() => ({ minWidth: width }), [width]);

    return useMemo(() => (
        <div 
            className={`headerCell${title === '' ? '-empty' : ''}`} 
            key={key_id} 
            style={title !== '' ? getStyle : {}}
        >
            {title}
        </div>
    ), [getStyle, title, key_id]);
}

export default ColumnHeaderCell;