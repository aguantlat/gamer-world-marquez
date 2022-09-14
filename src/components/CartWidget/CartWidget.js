import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import './CartWidget.scss'

const CartWidget = ({cartCount}) => {
    return (<NavLink className="cart-icon navbar-text" to={'/cart'} ><FontAwesomeIcon
        icon={faCartShopping}
    /> {cartCount}</NavLink>)
}

export default CartWidget;