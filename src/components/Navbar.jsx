import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { useCarrito } from '../context/CarritoContext';
const Navbar = () => {
    const [menuOpen,setMenuOpen]= useState(false);
    const navigate = useNavigate();
    const { carrito } = useCarrito();

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen);
    }

    const handleLogout= () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        navigate("/");
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.izq}>
                <button className={styles.menuButton} onClick={toggleMenu}>☰</button>
            </div>

            <div className={styles.center}>
                <Link to="/" className={styles.logo}>Tienda Artesanal</Link>
            </div>
            <div className={styles.der}>
                <div className={styles.links}>
                    <Link to="/products" className={styles.link}>Productos</Link>
                    
                    { usuario?.rol === "admin" && (
                    <Link to="/admin" className={styles.link}>Admin</Link>
                    )}

                    {usuario ? (
                    <>
                        <span className={styles.user}>Hola {usuario.nombre}</span>
{/*                         <button onClick={handleLogout} className={styles.link}>Salir</button>
 */}                    </>
                    ) : (
                    <>
                    <Link to="/registro" className={styles.link}>Registrarse</Link>
                        
                    </>
                    )}
                </div>
                {usuario ? (
                        <>
                            <Link to="/carrito" className={styles.link}>
                                <span className="material-symbols-outlined">shopping_bag</span>
                                {carrito.length > 0 && `(${carrito.length})`}
                            </Link>
                            <Link to="/user" className={styles.link}>
                            <span className="material-symbols-outlined">person</span>
                            </Link>
                            <button onClick={handleLogout} className={styles.linkBtnSalir}>Salir</button>

                        </>
                    ):(
                        <Link to="/login" className={styles.link}>
                        <span className="material-symbols-outlined">person</span>
                        </Link>
                    )
                }
                
            </div>

            {menuOpen && (
                <div className={styles.overlay} onClick={toggleMenu}>
                    
                    <div className={styles.mobileMenu}>
                    <button className={styles.closeButton} onClick={toggleMenu}>✕</button>
                    <p className={styles.section}>Productos</p>
                    <Link to="/products">Todos los productos</Link>
                    <Link to="/products/category/crochet">Crochet</Link>
                    <Link to="/products/category/encuadernación">Encuadernación</Link>
                    <Link to="/products/category/bordados">Bordados</Link>

                    <p className={styles.section}>Inicia Sesión o Registrate</p>
                    {usuario?.rol === "admin" && <Link to="/admin">Admin</Link>}
                    {usuario ? (
                        <>
                        <span>Hola {usuario.nombre}</span>
                        <button onClick={handleLogout} className={styles.link}>Salir</button>
                        </>
                    ) : (
                        <>
                        <Link to="/login">Entrar</Link>
                        <Link to="/registro">Registrarse</Link>
                        </>
                    )}
                    </div>
                </div>

            )}
        </nav>
    );
}

export default Navbar;