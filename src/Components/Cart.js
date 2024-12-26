
import { useSelector } from "react-redux";
import CartPage from "./CartPage";

const Cart = () =>{
    const cartItems =  useSelector(store => store.cart.item);
    
    console.log("hello")
    return(
        //ye div ka changes reflact nai hora  esa nai hai ke iske bilkul hi nai horey apaan refresh waera marre 
        // or jo tune bola tha wo karre jab dikhra ye 
        <div className="bg-black  ">
          
            <h1>hello </h1>
            <h1>heyyyyy</h1>
           <h1>mi   what's up bruhhhh </h1> 
           <h1>Please show hoja yaar </h1>

            <div className="border  ">      
                {
                    cartItems && cartItems.map(cart =>{
                                
                                return (
                                    //iske dikhre changes live 
                                    <CartPage {...cart} key={cart.name}/>   
                                   
                                )
                        
                    })
                } 
            </div>
       </div>
    )
    
}
export default Cart;