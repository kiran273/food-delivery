import React, { createContext, useContext, useState} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) =>{
    const [searchTerm, setSearchTerm] = useState("");

    const [cart, setCart] = useState([]);

    // Function to add item to cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };
    console.log(cart)
    // Function to remove item from cart
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return(
        <AppContext.Provider value={{searchTerm, setSearchTerm, cart, addToCart, removeFromCart }}>
            {children}
        </AppContext.Provider>
    )

};

export const useAppContext = () => useContext(AppContext);