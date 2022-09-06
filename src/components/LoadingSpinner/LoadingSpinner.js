import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <Row className="pt-5 h-100 justify-content-md-center">
      <Spinner animation="border" variant="primary" />
    </Row>
  );
};

export default LoadingSpinner;
