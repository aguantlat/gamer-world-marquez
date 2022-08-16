import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  let brandName = "Gamer Store";
  let categories = [
    { name: "Consolas", link: "#consolas" },
    { name: "Videojuegos", link: "#videojuegos" },
    { name: "Accesorios", link: "#accesorios" },
  ];

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <FontAwesomeIcon
            className="m-2"
            icon={faGamepad}
            color="lightgreen"
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
      </Container>
    </Navbar>
  );
};

export default NavBar;