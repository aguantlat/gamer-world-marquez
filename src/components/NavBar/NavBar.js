import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import './NavBar.scss';
import CartWidget from "../CartWidget/CartWidget";
import { accesorios, consolas, videojuegos } from "../../helpers/categories";

const NavBar = () => {
  let brandName = "Gamer Store";
  let categories = [consolas, videojuegos, accesorios];

  return (
    <Navbar bg="secondary">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <Link className="brand-link" to={'/'}>
          <FontAwesomeIcon icon={faGamepad} color="#2AB7CA" />
          <span>  {brandName}</span>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          {categories.map(({ name, id }) => (
            <NavLink className={"nav-link"} key={id} to={`/category/${id}`}>
              {name}
            </NavLink>
          ))}
        </Nav>
        <Navbar.Text>
          <CartWidget cartCount={40} />
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavBar;
