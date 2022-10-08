import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../firebase/config";

export const useProducts = () => {
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
      .catch(() =>
        console.log("Hubo un error al intentar cargar los productos.")
      )
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return { products, loading };
};
