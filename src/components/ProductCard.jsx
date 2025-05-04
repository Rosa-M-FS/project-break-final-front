import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css"
import { useCarrito } from "../context/CarritoContext";
import { useState } from "react";

const ProductCard = ({producto})=>{
    const noSinPrecio = 
        typeof producto.precio === "number"
        ? producto.precio.toFixed(2) + " €"
        : "Sin precio";
    const {addToCarrito}=useCarrito();
    const usuario = localStorage.getItem("token");
    const [mensaje, setMensaje] = useState("");
    
    const handleAdd = () => {
        addToCarrito(producto);
        setMensaje("¡Producto añadido!");
        setTimeout(() => setMensaje(""), 2000); 
      };
    return(
        <div className={styles.productCardContainer}>
            <h3>{producto.nombre}</h3>
            <Link to ={`/product/${producto._id}`}className={styles.cardLink}>
            <img src={`/images/${producto.imagenes[0]}`} alt={producto.nombre} className={styles.productImage} />
            <p>{producto.descripcion}</p>
            <p>{noSinPrecio}</p>
            </Link>
            {usuario && (
                <button onClick={handleAdd}className="styles.btnBuy">
                <span className="material-symbols-outlined">shopping_cart</span>
                </button>
            )}
             {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
            
        </div>
    );
}

export default ProductCard;