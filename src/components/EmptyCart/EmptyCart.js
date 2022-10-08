import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (<div className="p-3">
    <h5>El carrito está vacío</h5>
    <Link to={"/"}>
      <Button className="mt-3" variant="primary">
        Volver a la tienda
      </Button>
    </Link>
  </div>)
}

export default EmptyCart;