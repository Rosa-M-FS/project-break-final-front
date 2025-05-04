import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Registro";
import Tienda from "./Pages/Tienda";
import Category from "./Pages/Categories";
import ProductDetail from "./Pages/ProductDetail";
import './App.css'
import Carrito from "./Pages/Carrito";
import Checkout from "./Pages/Checkout";
import User from "./Pages/User";
import Wishlist from "./Pages/Wishlist";
function App() {

  return (
    <>    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element ={<Login/>}/> 
        <Route path="/registro" element={<Register/>}/>
        <Route path="/products" element={<Tienda />} />
        <Route path="/products/category/:categoria" element={<Category />} />        
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/wishlist" element={<Wishlist />} />

{/*         <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </>
  )
}

export default App


