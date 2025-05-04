import { useEffect, useState } from "react";
import { getProducts } from "../service/api";
import styles from "./Tienda.module.css";
import ProductCard from "../components/ProductCard";

const Tienda=()=> {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProductos)
      .catch(() => setError("No se han podido cargar los productos"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.tienda}>
      <h2>Productos disponibles</h2>
      <div className={styles.productosTienda}>
        {productos.map(producto => (
        <ProductCard key={producto._id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export default Tienda;
