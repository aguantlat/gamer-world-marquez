import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Cart.scss'
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="p-3">
        <h5>El carrito está vacío</h5>
        <Link to={"/"}>
          <Button className="mt-3" variant="primary">
            Volver a la tienda
          </Button>
        </Link>
      </div>
    );
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
                <Button  variant="link" onClick={() => removeItem(id)}>
                  Quitar del carrito
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">
              <h4 className="text-end">Total</h4>
            </td>
            <td>
              <h4 className="text-start">${getTotal()}</h4>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default Cart;
