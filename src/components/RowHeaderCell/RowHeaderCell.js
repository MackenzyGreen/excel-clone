import { useMemo } from 'react';
import './RowHeaderCell.css';
import { defaultSizes } from '../../constants/constants';
import { useSelector } from 'react-redux';

const RowHeaderCell = ({ title }) => {
    const height = useSelector((state) => state?.styles?.row[title] ? state?.styles?.row[title] : defaultSizes.height);

    const getStyle = useMemo(() => ({ minHeight: height }), [height]);

    return useMemo (() => (
        <div className="row-header" key={title} style={getStyle}>
            {title}
        </div>
    ), [title, getStyle])
        
}

export default RowHeaderCell;