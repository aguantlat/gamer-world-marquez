import { useContext } from "react";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

import { db } from "../../firebase/config";
import { useForm } from "../../hooks/useForm";

import { CartContext } from "../../context/CartContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Checkout = () => {
  const [orderId, setOrderId] = useState();
  const [savingOrder, setSavingOrder] = useState(false);
  const { values, handleInputChanges } = useForm({
    name: "",
    lastname: "",
    email: "",
    address: "",
  });
  const { cart, getTotal, clear } = useContext(CartContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const order = {
      buyer: values,
      items: cart,
      total: getTotal(),
      date: new Date(),
    };

    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "productos");
    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const products = await getDocs(q);
    const outOfStock = [];

    products.docs.forEach((doc) => {
      const itemToUpdate = cart.find((prod) => prod.id === doc.id);
      if (doc.data().stock >= itemToUpdate.quantity) {
        batch.update(doc.ref, {
          stock: doc.data().stock - itemToUpdate.quantity,
        });
      } else {
        outOfStock.push({ ...doc.data(), id: doc.id });
      }
    });

    if (outOfStock.length === 0) {
      setSavingOrder(true);
      batch
        .commit()
        .then(() => {
          addDoc(ordersRef, order)
            .then(({ id }) => {
              setOrderId(id);
              clear();
            })
            .finally(() => setSavingOrder(false));
        })
        .finally(() => setSavingOrder(false));
    }
  };

  const validateForm = () => {
    if (values.name.length < 3) {
      alert("Nombre inv??lido");
      return false;
    }

    if (values.lastname.length < 3) {
      alert("Apellido inv??lido");
      return false;
    }

    if (values.email.length < 3 || !values.email.includes("@")) {
      alert("Email inv??lido");
      return false;
    }

    if (values.address.length < 3) {
      alert("Direcci??n inv??lida");
      return false;
    }

    return true;
  };

  if (orderId) {
    return (
      <div className="pt-3">
        <Alert variant="primary">
          Su orden ha sido procesada, el id de orden es{" "}
          <strong>{orderId}</strong>.
        </Alert>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/"></Navigate>;
  }

  if (savingOrder === true) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="pt-3">
      <h4>Checkout</h4>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={values.name}
          onChange={handleInputChanges}
          type="text"
          className="form-control my-3"
          placeholder="Tu nombre"
          required
        ></input>
        <input
          name="lastname"
          value={values.lastname}
          onChange={handleInputChanges}
          type="text"
          className="form-control my-3"
          placeholder="Tu apellido"
          required
        ></input>
        <input
          name="email"
          value={values.email}
          onChange={handleInputChanges}
          type="email"
          className="form-control my-3"
          placeholder="Email"
          required
        ></input>
        <input
          name="address"
          value={values.address}
          onChange={handleInputChanges}
          type="text"
          className="form-control my-3"
          placeholder="Direcci??n de env??o"
          required
        ></input>

        <div className="d-flex justify-content-center">
          <Button type="submit"> Enviar orden </Button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
