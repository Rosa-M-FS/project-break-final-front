import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../service/api";
import styles from './ProductDetail.module.css';
import { useCarrito } from "../context/CarritoContext";


const ProductDetail = ()=>{
    const {id} = useParams();
    const [producto, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {addToCarrito}=useCarrito();
    const [mensaje, setMensaje] = useState("");

    const usuario= localStorage.getItem("token");

    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
          .then(setProduct)
          .finally(() => setLoading(false));
    }, [id]);
    
    const handleAdd = () => {
        addToCarrito(producto);
        setMensaje("¡Producto añadido!");
        setTimeout(() => setMensaje(""), 2000); 
    };

    if (loading) return <p>Cargando...</p>;
    if (!producto) return <p>No se encontró el producto.</p>;

    return(
        <div className={styles.detailProductContainer}>
            <button onClick={()=> navigate(-1)}className={styles.backBtn}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <h2>{producto.nombre}</h2>
            <img src={`/images/${producto.imagenes[0]}`} alt={producto.nombre} className={styles.productImage} />
            <p>{producto.descripcion}</p>
            <p><b>        
                {typeof producto.precio === "number"
                ? producto.precio.toFixed(2) + " €"
                : "Sin precio"}
            </b></p>

            {!usuario ?(
                <p className={styles.InitSesion}>
                Inicia sesión para comprar
                </p>
            ):(
                <button onClick={handleAdd} className={styles.btnBuy}>
                <span className="material-symbols-outlined">shopping_cart</span>
                </button>
            )}

            {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
            
        </div>
    );
}
export default ProductDetail;
