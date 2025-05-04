import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import { useCarrito } from "../context/CarritoContext";
import { Link } from "react-router-dom";

const User=()=>{
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const datos = localStorage.getItem("usuario");
    if (datos) {
      setUsuario(JSON.parse(datos));
    }
  }, []);
  
  if (!usuario) return <p>Debes iniciar sesión para ver tu perfil.</p>;
  const {carrito} = useCarrito();
  return (
    <div className={styles.userContainer}>
      <h2>Mi perfil</h2>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <h3>Mi Wishlist</h3>
        <Link to="/wishlist">Ver Wishlist</Link>
        <h3>Carrito actual</h3>
        <p>Tienes {carrito.length} productos en tu carrito</p>
        <Link to="/carrito">Ver carrito</Link>
        <h3>Mis compras</h3>
        <p>Aquí podras ver tu historial de pedidos</p>
    </div>
  );
};


export default User;