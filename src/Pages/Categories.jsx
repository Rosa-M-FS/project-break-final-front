import { useEffect,useState } from "react";
import {getCategory} from "../service/api";
import ProductCard from "../components/ProductCard";
import styles from "./Tienda.module.css";
import { useParams, Link } from "react-router-dom";

const Category = ()=>{
    const {categoria} = useParams();
    const [productos,setProductos]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        getCategory(categoria)
        .then(setProductos)
        .catch(()=>setError("No se han podido cargar los productos"))
        .finally(()=>setLoading(false));
    },[categoria]);
    
    if(loading) return (<p>Cargando productos de {categoria}...</p>)
    if(error) return (<p>{error}</p>);

    return (
        <div className={styles.tienda}>
            <h2>Productos de {categoria}</h2>
            <div className={styles.productosTienda}>
                {productos.map(p=>(
                    <ProductCard key={p._id} producto={p}/>
                ))}
            </div>
        </div>
    )
}

export default Category;