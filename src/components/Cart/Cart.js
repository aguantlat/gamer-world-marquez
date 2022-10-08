import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Cart.scss";
import { CartContext } from "../../context/CartContext";

import EmptyCart from "../EmptyCart/EmptyCart";
import CartSummary from "../CartSummary/CartSummary";

const Cart = () => {
  const { cart, clear } = useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="pt-3">
      <h4>Carrito</h4>
      <div className="d-flex py-2 justify-content-end">
        <Button variant="secondary" onClick={clear}>
          Vaciar carrito
        </Button>
      </div>
      <CartSummary/>
      <div className="d-flex justify-content-end py-2">
        <Link to={"/checkout"} className="btn btn-success">
          Terminar mi compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
