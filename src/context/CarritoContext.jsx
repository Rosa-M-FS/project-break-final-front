import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext(); //creo el contexto
//Componente que envuelve la app para poder compartir el estado entre componentes
const CarritoProvider=({children})=>{
    const carritoSave=localStorage.getItem("carrito");
    const carritoStart=carritoSave ? JSON.parse(carritoSave):[];
    //estado para guardar los productos añadidos
    const [carrito, setCarrito]=useState(carritoStart);
    //guardar carrito cada vez que cambia
    useEffect(()=>{
        localStorage.setItem("carrito",JSON.stringify(carrito));
    },[carrito]);//cada vez que cambia el carrito
    //función para agregar al carrito 
    const addToCarrito=(producto)=>{
        const nuevoCarrito=[...carrito,producto]//copia del carrito antiguo y le pongo el nuevo producto
        setCarrito(nuevoCarrito);//Actualizo el estado del carrito
    }

    const deleteToCarrito=(productoId)=>{
        //filtro los productos del carrito por id y me devuelve todos los que sean distintos del id que le he pasado
        const carritoIdmenos = carrito.filter((p)=>p._id !== productoId );
        setCarrito(carritoIdmenos);
    }

    const clearCarrito = ()=>{
        setCarrito([]);
    }
    //devolver lo que hay que compartir con toda la app
    return (
        <CarritoContext.Provider value={{carrito,addToCarrito,deleteToCarrito,clearCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}
//otra función para crear un acceso directo al uso del carrito desde cualquier componente

const useCarrito=()=>{
    return useContext(CarritoContext);
}

export {CarritoProvider,useCarrito};
