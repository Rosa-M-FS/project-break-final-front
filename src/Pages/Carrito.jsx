import { useCarrito } from "../context/CarritoContext";
import styles from "./Carrito.module.css";
import { useNavigate } from "react-router-dom";


const Carrito = ()=>{
    const {carrito,deleteToCarrito,clearCarrito}=useCarrito();
    if (carrito.length === 0){
        return <p>El carrito esta vacío</p>
    }
    const navigate =useNavigate();
    const total = carrito.reduce((acc,p)=>acc+p.precio,0);

    return(
        <div className={styles.carritoContainer}>
            <h2>Tú carrito de compra</h2>
            {carrito.map((p)=>(
                <div key={p._id}>
                    <h3>{p.nombre}</h3>
                    <img src={`/images/${p.imagenes[0]}`} alt={p.nombre} className={styles.productImageCarrito} />
                    <p>{p.precio.toFixed(2)}€</p>
                    <button onClick={()=>deleteToCarrito(p._id)}className={styles.eliminarBtn}>X</button>
                </div>
            ))}

        <div className={styles.carritoResumen}>
            <p><strong>Total: {total.toFixed(2)} €</strong></p>
            <button className={styles.vaciarBtn} onClick={clearCarrito}>Vaciar carrito</button>
        </div>
        <button className={styles.pagarBtn} onClick={() => navigate("/checkout")}>Finalizar compra</button>
        </div>
    )
}
export default Carrito;
