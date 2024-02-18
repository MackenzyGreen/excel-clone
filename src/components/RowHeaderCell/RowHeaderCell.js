import './RowHeaderCell.css';

const RowHeaderCell = ({ title }) => {
    return (
        <div className="row-header" key={title}>
            {title}
        </div>
    )
}

export default RowHeaderCell;