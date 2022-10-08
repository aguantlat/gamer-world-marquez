import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");

    getDocs(itemsCollection)
      .then((snapshot) => {
        if (snapshot.size > 0) {
          setCategories(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .catch(() =>
        console.log("Hubo un error al intentar cargar las categorías.")
      );
  }, []);

  return { categories };
};
