import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    let cartCount = 42;

    return (<div className="clickable"><FontAwesomeIcon
        icon={faCartShopping}
    /> {cartCount}</div>)
}

export default CartWidget;