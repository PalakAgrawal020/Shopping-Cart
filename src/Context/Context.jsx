import { createContext, useState, useContext, useEffect } from "react";

const context = createContext();

export const useContextProvider = () => useContext(context);

export const ContextProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        return savedWishlist;
    })

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                const parsedCart = JSON.parse(savedCart);
                return Array.isArray(parsedCart) ? parsedCart : [];
            } catch (error) {
                console.error("Error parsing cart from localStorage", error);
                return [];
            }
        }
        return [];
    });

    const [productCount, setProductCount] = useState({});

    useEffect(() => {
        const initialCount = { ...productCount }
        cart.forEach(product => {
            if(!initialCount[product.id]) {
                initialCount[product.id] = 1;
            }
        });
        setProductCount(initialCount);
    }, [cart])

    const increaseCount = (id) => {
        setProductCount(prevCount => ({
            ...prevCount,
            [id] : prevCount[id] + 1
        }));
    };

    const decreaseCount = (id) => {
        setProductCount(prevCount => ({
            ...prevCount,
            [id] : prevCount[id] > 1 ? prevCount[id] - 1 : 1
        }));
    };

    const addToWishlist = (product) => {
        const updatedWishlist = [...wishlist, product];
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        removeFromCart(product.id);
    };

    const removeFromWishlist = (itemId) => {
        const updatedWishlist = wishlist.filter(item => item.id != itemId);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        removeFromWishlist(product.id);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id != itemId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    return (
        <context.Provider value={{ wishlist, addToWishlist, removeFromWishlist, cart, addToCart, removeFromCart, increaseCount, decreaseCount, productCount }}>
            {children}
        </context.Provider>
    )
}