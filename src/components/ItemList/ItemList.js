import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";

import Item from "../Item/Item";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemsQuery = categoryId
      ? query(
          collection(db, "productos"),
          where("categoryId", "==", categoryId)
        )
      : collection(db, "productos");

    getDocs(itemsQuery)
      .then((snapshot) => {
        if (snapshot.size > 0) {
          setProducts(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .catch(() => console.log('Hubo un error al intentar cargar los productos.'))
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
