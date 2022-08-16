import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export function NavBar() {
  let brandName = "Gamer Store";
  let categories = [
    { name: "Consolas", link: "#consolas" },
    { name: "Videojuegos", link: "#videojuegos" },
    { name: "Accesorios", link: "#accesorios" },
  ];

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">{brandName}</Navbar.Brand>
          <Nav className="me-auto">
            {categories.map(({name, link}) => (
              <Nav.Link key={link} href={link}>{name}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
