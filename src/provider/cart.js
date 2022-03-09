import { createContext,useState } from "react";
export const CartContenxt = createContext([])

export const CartProvider =({children})=>{
    const [cart,setCart] = useState([])

    const addToCart = (item) =>{
        setCart([...cart,item])
    }
    const removeFromCart = (item)=>{
        const newCart = cart.filter((itemOnCart)=> itemOnCart.name !== item.name)
        setCart(newCart)
    }

    return(
        <CartContenxt.Provider value={{cart,addToCart,removeFromCart}}>
                {children}    
        </CartContenxt.Provider>
    )

}