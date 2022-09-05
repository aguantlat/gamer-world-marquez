import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <Row className="justify-content-md-center">
      <Spinner animation="border" variant="primary" />
    </Row>
  );
};

export default LoadingSpinner;
