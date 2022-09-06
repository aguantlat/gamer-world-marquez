import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { name, imgUrl, price, description, stock, quantity } = item;
  const showQuantity = (quantity) => alert(`Añadiste ${quantity} items.`);

  return (
    <Row className="pt-5">
      <Col xs={6} className="d-flex justify-content-center">
        <img className="w-100" alt="productImage" src={imgUrl}></img>
      </Col>
      <Col xs={6}>
        <div className="d-flex flex-column">
          <div className="d-fkex flex-column px-2">
            <h4> {name}</h4>
            <h3> ${price} </h3>
            <p>
              {description}
            </p>
          </div>
          <ItemCount stock={stock} initial={quantity} onAdd={showQuantity}></ItemCount>
        </div>
      </Col>
    </Row>
  );
};

export default ItemDetail;
