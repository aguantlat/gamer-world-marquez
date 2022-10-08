import { Badge } from "react-bootstrap";

const StockIndicator = ({ stock }) => {
  return (
    <h6 className="m-0">
      {stock ? (
        <Badge bg="primary">{stock} disponibles</Badge>
      ) : (
        <Badge bg="secondary">Sin stock</Badge>
      )}
    </h6>
  );
};

export default StockIndicator;
