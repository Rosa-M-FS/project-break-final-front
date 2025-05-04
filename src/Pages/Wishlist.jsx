import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import styles from "./Wishlist.module.css"; 

const Wishlist=()=> {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div>
        <h2>Tu wishlist está vacía</h2>
      </div>
    )
  }

  return (
    <div className={styles.wishlistContainer}>
      <h2>Mi Wishlist</h2>
      <ul className={styles.list}>
        {wishlist.map(producto => (
          <li key={producto._id} className={styles.pwish}>
            <Link to={`/producto/${producto._id}`} className={styles.link}>
              {producto.nombre} - {producto.precio?.toFixed(2)} €
            </Link>
            <button onClick={() => removeFromWishlist(producto._id)} className={styles.btnWishDel}>
            <span class="material-symbols-outlined">favorite</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
