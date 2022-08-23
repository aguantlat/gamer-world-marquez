import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  let brandName = "Gamer Store";
  let categories = [
    { name: "Consolas", link: "#consolas" },
    { name: "Videojuegos", link: "#videojuegos" },
    { name: "Accesorios", link: "#accesorios" },
  ];

  return (
    <Navbar bg="secondary">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <FontAwesomeIcon
            className="m-2"
            icon={faGamepad}
            color="#2AB7CA"
          />
          <span>{brandName}</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          {categories.map(({ name, link }) => (
            <Nav.Link key={link} href={link}>
              {name}
            </Nav.Link>
          ))}
        </Nav>

        <Navbar.Text><CartWidget cartCount={40}/></Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavBar;
