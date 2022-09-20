import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./firebase/config";
import "./App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from "./context/CartContext";

function App() {
  const greetingMessage = "Bienvenido a Gamer Store";

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={greetingMessage} />}
            ></Route>
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting={greetingMessage} />}
            ></Route>
            <Route
              path="/item/:itemId"
              element={<ItemDetailContainer />}
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
