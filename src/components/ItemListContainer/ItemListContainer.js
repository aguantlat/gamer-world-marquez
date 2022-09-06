import Alert from "react-bootstrap/Alert";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Alert variant="secondary">{greeting}</Alert>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
