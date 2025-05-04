import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";
import { useCarrito } from "../context/CarritoContext";

const Checkout=()=>{
  const navigate = useNavigate();
  const { clearCarrito } = useCarrito();

  useEffect(() => {
    clearCarrito();
  }, []);

  return (
    <div className={styles.checkoutContainer}>
      <h1>¡Gracias por tu compra!</h1>
      <p>Tu pedido ha sido procesado con éxito.</p>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
}

export default Checkout;

