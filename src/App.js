import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const greetingMessage = "Bienvenido a Gamer Store";

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greetingMessage}/>
      <ItemDetailContainer />
    </>
  );
}

export default App;
