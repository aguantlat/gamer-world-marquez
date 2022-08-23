import Alert from 'react-bootstrap/Alert';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
    const showQuantity = (quantity) => alert(`Añadiste ${quantity} items.`);
    return (<>
        <Alert variant="secondary">{greeting}</Alert>
        <ItemCount stock={5} onAdd={showQuantity}></ItemCount>
    </>)
}

export default ItemListContainer;