import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const categorias = [
    { nombre: "Crochet", imagen: "/images/categoriacrochet.jpg" },
    { nombre: "Encuadernación", imagen: "/images/categoriaencuadernacion.jpg" },
    { nombre: "Bordados", imagen: "/images/categoriabordado.jpg" },
    { nombre: "Otros", imagen: "/images/categoriaotros.jpg" },
];

const Home = ()=>{
    return(
        <>
        <div className={styles.homeContainer}>
            <h1>Bienvenid@ a la tienda artesanal</h1>
            <p>Aquí puedes encontrar productos hechos a mano con mucho cariño</p>
        
        </div>
        <h2 className={styles.sectionProducts}>Explora nuestros productos</h2>
        <Link to="/products" className={styles.linkAllProducts}>Todos los productos</Link>
        <div className={styles.productDash}>
            {categorias.map((category)=>(
                <Link key={category.nombre}
                to={`/products/category/${category.nombre.toLowerCase()}`}
                className={styles.categoryCard}
              >
                <img src={category.imagen} alt={category.nombre} />
                <h3>{category.nombre}</h3>
              </Link>
            ))}
        </div>
        </>
    )
}
export default Home;