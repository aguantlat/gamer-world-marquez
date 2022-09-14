import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

import getProducts from "../../helpers/getProducts";

import Item from "../Item/Item";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(Number(categoryId))
      .then((products) => {
        setProducts(products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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
