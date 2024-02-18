import './ColumnHeaderCell.css'

const HeaderCell = ({title, key_id}) => {
    console.log(title, key_id);
    return (
        <div className={`headerCell${title === '' ? '-empty' : ''}`} key={key_id}>
            {title}
        </div>
    )
}

export default HeaderCell;