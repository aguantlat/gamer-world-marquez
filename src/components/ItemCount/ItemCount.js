import { useState } from "react";

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const addToCartText = 'Añadir al carrito';

    const handleAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const handleSubtract = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="d-flex flex-column p-2">
            <div className="d-flex align-items-center justify-content-between pb-3">
                <Button variant="outline-primary" onClick={handleSubtract}><FontAwesomeIcon icon={faMinus} /></Button>
                <h4 className="px-4 m-0">{quantity}</h4>
                <Button variant="outline-primary" onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /></Button>
            </div>
            <Button disabled={!stock || !quantity} variant="outline-primary" onClick={() => onAdd(quantity)}>{addToCartText}</Button>
        </div>
    );
}

export default ItemCount;