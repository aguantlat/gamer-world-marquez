import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Item from "../Item/Item";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import getProducts from "../../helpers/getProducts";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((products) => {
        setProducts(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading ? <LoadingSpinner /> : <Row xs={1} md={2} className="g-4">
        {products.map((item) => (
          <Item key={item?.id} item={item}></Item>
        ))}
      </Row>}
    </Container>
  );
};

export default ItemList;
