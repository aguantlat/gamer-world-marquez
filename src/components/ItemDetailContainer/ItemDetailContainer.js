import { useProduct } from "../../hooks/useProduct";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ItemDetailContainer = () => {
  const { loading, item } = useProduct();

  return <>{loading ? <LoadingSpinner /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
