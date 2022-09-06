import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import getItem from "../../helpers/getItem";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getItem(Number(itemId))
      .then((item) => {
        setItem(item);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <Container>
      {loading ? <LoadingSpinner /> : <ItemDetail item={item} />}
    </Container>
  );
};

export default ItemDetailContainer;
