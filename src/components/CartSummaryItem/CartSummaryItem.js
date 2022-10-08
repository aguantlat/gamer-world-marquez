import { useContext } from "react";
import { Button } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";

const CartSummaryItem = ({ index, item }) => {
  const { removeItem } = useContext(CartContext);

  const { id, name, quantity, price } = item;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>$ {price}</td>
      <td>
        <strong>$ {price * quantity}</strong>
      </td>
      <td>
        <Button variant="link" onClick={() => removeItem(id)}>
          Quitar del carrito
        </Button>
      </td>
    </tr>
  );
};

export default CartSummaryItem;
