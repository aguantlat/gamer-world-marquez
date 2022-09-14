import { useContext } from "react";
import { Button, Table } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return <h5 className="p-3">El carrito está vacío</h5>;
  }

  return (
    <div className="pt-3">
      <h4>Carrito</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, name, price, quantity }, index) => (
            <tr key={id}>
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
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
