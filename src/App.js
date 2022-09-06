import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const greetingMessage = "Bienvenido a Gamer Store";

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={greetingMessage}/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={greetingMessage}/>}></Route>
        <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
