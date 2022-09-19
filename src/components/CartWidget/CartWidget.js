import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import './CartWidget.scss'
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext);

    return (<NavLink className="cart-icon navbar-text" to={'/cart'} ><FontAwesomeIcon
        icon={faCartShopping}
    /> {cartQuantity()}</NavLink>)
}

export default CartWidget;