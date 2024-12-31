import { useSelector } from "react-redux";
import CartPage from "./CartPage";


const Cart = () => {
    const cartItems =  useSelector(store => store.cart.item);
  return (
    <div className='bg-green-500'>
      <h1 className=''>hello  mi hhh these is showing please show  bhai please work</h1> 
      <h1>testing use Selctor pass  testing map failed   map content test: pass 
        testing failed for some cases next final test : passed  final wala test is it working now yessss   evrything is done 
        </h1>
   


            <div className="border  ">      
                {/* {
                    cartItems && cartItems.map((cart,index )=>{
                                const key = cart+index;
                                console.log(key)
                                return (
                                    //iske dikhre changes live 
                                     
                                    <CartPage {...cart} key={key}/>  
                                    // <div> heey testing</div> 
                                   
                                )
                        
                    })
                }  */}
            </div>
    </div>
  )
}

export default Cart;
