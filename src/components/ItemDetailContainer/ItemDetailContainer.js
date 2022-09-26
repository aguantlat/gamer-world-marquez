import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../firebase/config";

import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemRef = doc(db, "productos", itemId)

    getDoc(itemRef)
      .then((snapshot) => {
         if(snapshot.exists()) {
          setItem({id: snapshot.id, ...snapshot.data()});}
      })
      .catch(() => console.log('Hubo un error al intentar cargar el producto.'))
      .finally(() => setLoading(false));
  }, [itemId]);

  return <>{loading ? <LoadingSpinner /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
