import {createContext, useState, useContext} from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        return savedWishlist;
    })

    const addToWishlist = (product) => {
        const updatedWishlist = [...wishlist, product];
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    const removeFromWishlist = (itemId) => {
        const updatedWishlist = wishlist.filter(item => item.id != itemId);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }

    return (
        <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}