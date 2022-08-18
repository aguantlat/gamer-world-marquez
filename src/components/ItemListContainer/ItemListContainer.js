import Alert from 'react-bootstrap/Alert';

const ItemListContainer = ({greeting}) => {
    return (<Alert variant="success">{greeting}</Alert>)
}

export default ItemListContainer;