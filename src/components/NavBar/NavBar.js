import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.scss";

import { CartContext } from "../../context/CartContext";

import CartWidget from "../CartWidget/CartWidget";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const brandName = "Gamer Store";
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");

    getDocs(itemsCollection).then((snapshot) => {
      if (snapshot.size > 0) {
        setCategories(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    }).catch(() => console.log('Hubo un error al intentar cargar las categorías.'));
  }, []);

  return (
    <Navbar bg="secondary">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <Link className="brand-link" to={"/"}>
            <FontAwesomeIcon icon={faGamepad} color="#2AB7CA" />
            <span> {brandName}</span>
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
          {cart?.length > 0 && <CartWidget cartCount={cart?.length} />}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavBar;
