import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children})=> {

    const [cartItems, setcartItems] = useState([]);

    const addItemToCart = (item) => {
        setcartItems([...cartItems , item]);
    }

    const removeItemFromCart = (index) => {
        let temp = cartItems;
        temp.splice(index,1)
        setcartItems([...temp]);
    }

    return <CartContext.Provider value={{cartItems, setcartItems, addItemToCart, removeItemFromCart}}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => useContext(CartContext);

export default useCartContext; 