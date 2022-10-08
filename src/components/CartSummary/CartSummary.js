import { useContext } from "react";
import { Table } from "react-bootstrap";

import { CartContext } from "../../context/CartContext";
import CartSummaryItem from "../CartSummaryItem/CartSummaryItem";

const CartSummary = () => {
  const { cart, getTotal } = useContext(CartContext);

  return (
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
        {cart.map((item, index) => (
          <CartSummaryItem key={item?.id} index={index} item={item} />
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
  );
};

export default CartSummary;
