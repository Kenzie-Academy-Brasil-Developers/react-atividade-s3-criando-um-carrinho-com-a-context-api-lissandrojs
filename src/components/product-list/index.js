import { useContext } from "react"
import { CartContenxt } from "../../provider/cart"
import {CatalogueContext} from "../../provider/catalogue.js"
import {  ContainerCarrinho,ContainerVitrine } from "./styles"
import Button from "../button/index"

const ProductList = ({type})=>{
    const {catalogue} = useContext(CatalogueContext)

    const {cart} = useContext(CartContenxt)
    return(
       
            <ul>
            <ContainerVitrine>
               
                {type === "catalogue" && catalogue.map((item,index)=>(
                    <>
                    
                    <li key={index}>
                        {item.name} <Button type={type} item={item}></Button>
                    </li>
                    </>
                ))}
            </ContainerVitrine>
            <ContainerCarrinho>
               
                {type === "cart" && cart.map((item,index)=>(
                
                    <li key={index}>
                        {item.name} <Button type={type} item={item}></Button>
                    </li>
                

                ))}  
            </ContainerCarrinho>
        </ul>
       
    )

}
export default ProductList