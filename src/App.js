import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const greetingMessage = 'Bienvenido a Gamer Store';

  return (<>
  <NavBar />
  <ItemListContainer greeting={greetingMessage}/>
  </>);
}

export default App;
