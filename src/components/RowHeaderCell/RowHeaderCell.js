import './RowHeaderCell.css';

const RowHeaderCell = ({ title }) => {
    return (
        <div key={title}>
            {title}
        </div>
    )
}

export default RowHeaderCell;