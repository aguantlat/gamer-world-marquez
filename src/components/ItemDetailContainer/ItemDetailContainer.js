import { useEffect, useState } from "react";
import getItem from "../../helpers/getItem";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const mockId = 5;

  useEffect(() => {
    getItem(mockId).then((item) => {
      setItem(item);
    });
  });

  return <>{item && <ItemDetail item={item} />} </>;
};

export default ItemDetailContainer;
