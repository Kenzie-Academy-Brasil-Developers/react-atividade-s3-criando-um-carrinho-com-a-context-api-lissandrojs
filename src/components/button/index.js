import { useContext } from "react"

import { CartContenxt } from "../../provider/cart"
import { CatalogueContext } from "../../provider/catalogue"
const Button =({type,item})=>{

    const {cart,addToCart,removeFromCart} = useContext(CartContenxt)
    const {catalogue,addToCatalogue,removeFromCatalogue} = useContext(CatalogueContext)
    
    const text = type === "catalogue"? "add to cart" : "Remove from cart"

    const handleClick =()=>{
        if(type === "catalogue"){
            removeFromCatalogue(item)
            addToCart(item)
        }else{
            removeFromCart(item)
            addToCatalogue(item)
        }
    }

    return(
                <div>
                    <button onClick={handleClick}>{text}</button>

                </div>

        )

}

export default Button