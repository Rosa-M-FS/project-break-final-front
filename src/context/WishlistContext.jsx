import {createContext, useContext,useEffect,useState } from "react";

const WishlistContext=createContext();

const WishlistProvider=({children})=>{
    const wishlistSave=localStorage.getItem("wishlist");
    const wishlistStart= wishlistSave ? JSON.parse(wishlistSave):[];
    const [wishlist, setWishlist]=useState(wishlistStart);
    useEffect(()=>{
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    },[wishlist]);

    const addToWishlist = (producto)=>{
        if(!wishlist.some(p=>p._id === producto._id))
        setWishlist([...wishlist,producto]);
    }

    const deleteToWishlist =(productoId)=>{
        const wishlistIdmenos = wishlist.filter((p)=>p._id !== productoId)
        setWishlist(wishlistIdmenos);
    }   

    const isInWishlist = (productoId) => wishlist.some(p => p._id === productoId);
    
    return (
        <WishlistContext.Provider value ={{wishlist,isInWishlist,addToWishlist,deleteToWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}


const useWishlist=()=>{
    return useContext(WishlistContext);
}

export {WishlistProvider,useWishlist};