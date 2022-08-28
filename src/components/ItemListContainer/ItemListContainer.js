import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import getProducts from '../../helpers/getProducts';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
        })
    }
    )

    const showQuantity = (quantity) => alert(`Añadiste ${quantity} items.`);
    return (<>
        <Alert variant="secondary">{greeting}</Alert>
        <ItemList items={products} />
        <ItemCount stock={5} onAdd={showQuantity}></ItemCount>
    </>)
}

export default ItemListContainer;