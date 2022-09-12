import { Badge } from "react-bootstrap";

const StockIndicator = ({ stock }) => {
  return (
    <h6 className="m-0">
      <Badge bg="primary">{stock} disponibles</Badge>{" "}
    </h6>
  );
};

export default StockIndicator;
