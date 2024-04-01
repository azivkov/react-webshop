import { createContext } from "react";

const AppContext = createContext({
    cart: [],
    setCart: () => {},
    handleAddToCart: () => {},
    removeFromCart: () => {}
})

export {AppContext}