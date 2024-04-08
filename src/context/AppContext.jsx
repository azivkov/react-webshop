import { createContext } from "react";

const AppContext = createContext({
    cart: [],
    setCart: () => {},
    handleAddToCart: () => {},
    removeFromCart: () => {},
    user: {},
    setUser: () => {}
})

export {AppContext}