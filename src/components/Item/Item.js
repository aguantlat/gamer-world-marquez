import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import StockIndicator from "../StockIndicator/StockIndicator";

const Item = ({ item }) => {
  const { id, imgUrl, name, price, stock } = item;

  return (
    <Col>
      <Card>
        <Card.Img height={290} variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>
            <Link to={`/item/${id}`}>{name}</Link>           
          </Card.Title>
          <StockIndicator stock={stock}></StockIndicator>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
