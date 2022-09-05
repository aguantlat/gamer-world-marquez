import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import getItem from "../../helpers/getItem";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  const mockId = 5;

  useEffect(() => {
    setLoading(true);
    getItem(mockId)
      .then((item) => {
        setItem(item);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container>
      {loading ? <LoadingSpinner /> : <ItemDetail item={item} />}
    </Container>
  );
};

export default ItemDetailContainer;
