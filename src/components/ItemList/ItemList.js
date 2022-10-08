import Row from "react-bootstrap/Row";

import { useProducts } from "../../hooks/useProducts";

import Item from "../Item/Item";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemList = () => {
  const { products, loading } = useProducts();

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Row xs={1} md={2} className="g-4">
          {products.map((item) => (
            <Item key={item?.id} item={item}></Item>
          ))}
        </Row>
      )}
    </>
  );
};

export default ItemList;
