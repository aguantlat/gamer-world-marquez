import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";

import ItemList from "../ItemList/ItemList";
import getProducts from "../../helpers/getProducts";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  });

  return (
    <>
      <Alert variant="secondary">{greeting}</Alert>
      <ItemList items={products} />
    </>
  );
};

export default ItemListContainer;
