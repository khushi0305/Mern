import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children})=> {

    const [cartItems, setcartItems] = useState([]);

    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => useContext(CartContext);

export default useCartContext; 