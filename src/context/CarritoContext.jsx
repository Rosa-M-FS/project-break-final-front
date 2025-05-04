import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext(); 

const CarritoProvider=({children})=>{
    const carritoSave=localStorage.getItem("carrito");
    const carritoStart=carritoSave ? JSON.parse(carritoSave):[];
    
    const [carrito, setCarrito]=useState(carritoStart);
    
    useEffect(()=>{
        localStorage.setItem("carrito",JSON.stringify(carrito));
    },[carrito]);

    const addToCarrito=(producto)=>{
        const nuevoCarrito=[...carrito,producto];
        setCarrito(nuevoCarrito);
    }

    const deleteToCarrito=(productoId)=>{
     
        const carritoIdmenos = carrito.filter((p)=>p._id !== productoId );
        setCarrito(carritoIdmenos);
    }

    const clearCarrito = ()=>{
        setCarrito([]);
    }
   
    return (
        <CarritoContext.Provider value={{carrito,addToCarrito,deleteToCarrito,clearCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}


const useCarrito=()=>{
    return useContext(CarritoContext);
}

export {CarritoProvider,useCarrito};
