import { useContext } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import StockIndicator from "../StockIndicator/StockIndicator";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const { id, name, imgUrl, price, description, stock } = item;
  const addToCart = (value) => {
    if (value <= 0) {
      return;
    }
    addItem({ id, name, price }, value);
  };

  return (
    <Row className="pt-5">
      <Col xs={6} className="d-flex justify-content-center">
        <img className="w-100" alt="productImage" src={imgUrl}></img>
      </Col>
      <Col xs={6}>
        <div className="d-flex flex-column">
          <div className="d-fkex flex-column px-2">
            <h4> {name}</h4>
            <StockIndicator stock={stock}></StockIndicator>
            <h3> ${price} </h3>
            <p>{description}</p>
          </div>
          {isInCart(id) ? (
            <Link to={"/cart"}>
              <Button className="w-100" variant="primary">
                Finalizar compra
              </Button>
            </Link>
          ) : stock ? (
            <ItemCount stock={stock} onAdd={addToCart}></ItemCount>
          ) : (
            <h6>Producto no disponible.</h6>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default ItemDetail;
