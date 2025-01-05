
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CartPage from './CartPage';
import { clearItems } from '../utils/cartSlice';
import { toast } from 'react-toastify';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';
import NameInfo from './NameInfo';
import OrderPlaced from './OrderPlaced';



const CheckoutPage = () => {
     const [isValid , setisValid] = useState(false);
     

   
    const cartItemsObj = useSelector(store => store.cart.item);
    
    // console.log(cartItemsObj)
     const cartItems =  Object.values(cartItemsObj);
    //  console.log(cartItems)
    const subtotal = cartItems.reduce((total, item) => total + (item.price/100 || item.defaultPrice/100)*item.quantity, 0);
    const gst = subtotal * 0.18; 
    const [total , setTotal ] = useState(subtotal+gst);

    // console.log(subtotal,total,gst);

    const dispatch = useDispatch();
    const clearingItems  = () =>{
        dispatch(clearItems());
        setTotal(0);
        toast.warning("All Items removed Successfully");
    }

      const[paymentMode,setPaymentMode] = useState('');

      const paymentRequestHandler = (e) =>{
        let value = e.target.value;
        setPaymentMode(e.target.value);
        if(value==='card') return toast.warning(" Please try with MIcoins Cards are not accepted");
        if(value==='upi') return toast.warning(" Please try with MIcoins UPI are not accepted");
        
      }
      



    const wrongCoupon = () =>{
     toast.warning("Invalid coupon or coupon is expiress");
    }
    const couponHandler = () =>{
       if (isValid){
          if(total>=1000){
                setTotal(total-149);
              // console.log(total)     
               setisValid(!isValid);
                 toast.success("Congratulations you saved ₹50");
          }else {
               toast.warning("Add more items minimum total price should be 1000" );
           }
         
       }

    }
    const[orderPlaced,setOrderPlaced] = useState(false);
    const orderSuccesfull = () =>{
        if(paymentMode==='') return toast.warning(" Please add payment method");
        if(paymentMode==='card') return toast.warning(" Please try with MIcoins Cards are not accepted");
        if(paymentMode==='upi') return toast.warning(" Please try with MIcoins UPI are not accepted");
        toast.success("Order Placed Successfully");
        setOrderPlaced(true);
        dispatch(clearItems());
        setTotal(0);
       
    }
    if(orderPlaced){
        
        return <OrderPlaced/>
    }
    if(cartItems.length===0){
      return (
          <EmptyCart/>
      )
    }else{

   
    return (
        <div className="flex flex-col md:flex-row justify-between items-start w-10/12 mx-auto mt-8 gap-8 ">
            {/* Cart Items Section */}
            
            <div className="flex flex-col w-full md:w-8/12 gap-4">
                <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
                <div className="border bg-white shadow-md rounded-lg p-4">
                    
                    <div className='flex justify-between items-center w-full p-4 bg-gray-100 border rounded-lg gap-4 shadow-sm m-1'>
                              <div>
                                   <span className='font-bold '>Cart  </span>
                                   <span className='text-sm text-gray-300 ml-2 '>{cartItems.length} items</span>
                              </div>
                              <span onClick={() =>{
                                   clearingItems();
                              }} className='cursor-pointer'><i className="fa-solid fa-trash"></i> Remove all</span>
                              
                     </div>
                       {/* {console.log(cartItems)   }          */}
                    {cartItems && cartItems.map((cart, index) => {
                        const key = cart + index;
                        return <CartPage {...cart}     total = {total}  setTotal={setTotal} key={key} />;
                    })}
                </div>
            </div>

            {/* Order Summary and Payment Details */}
            <div className="flex flex-col w-full md:w-4/12  gap-6 mt-16">
                {/* Order Summary Card */}
                <div className="border bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>{(subtotal).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span className='text-green-400'>Free</span>
                    </div>
                    <div className='flex justify-between py-2'>
                    <span>GST (18%)</span>
                     <span>₹ {(gst ).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{(total).toFixed(2)}</span>
                    </div>
                </div>

                {/* Payment Details Card */}
                <div className="border bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-semibold mb-4">Payment Details</h2>

                    {/* Payment Options */}
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold mb-2">Choose Payment Method</h3>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" value="card" onChange={paymentRequestHandler}
                                 className="accent-black" />
                                Credit/Debit Card
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" value="upi" onChange={paymentRequestHandler}
                                 className="accent-black" />
                                Pay With UPI
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" value="micoins" 
                                onChange={paymentRequestHandler}className="accent-black" />
                                Pay with MI Coins
                            </label>
                        </div>
                    </div>

                    {/* Coupon Code Section */}
                    <div className="mt-4">
                        <h3 className="text-sm font-semibold mb-2">Apply Coupon</h3>
                        <div className="flex gap-2">
                            <input onChange={(e) =>{
                              // console.log(e.target.value);
                              let value = e.target.value;
                               if(value==='virat18'){
                                  
                                   
                                   setisValid(true);
                               }
                            }}
                                type="text"
                                placeholder="Enter coupon code"
                                className="border rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                   onClick={!isValid?wrongCoupon:couponHandler}
                            >
                                Apply
                            </button>
                        </div>
                        <div className='text-left'>
                          
                           <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 my-4"
                                   onClick={orderSuccesfull}
                             >Checkout 
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
};

export default CheckoutPage;


// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import CartPage from "./CartPage";
// import { clearItems } from "../utils/cartSlice";
// import { toast } from "react-toastify";
// import EmptyCart from "./EmptyCart";


// const CheckoutPage = () => {
//     const cartItemsObj = useSelector(store => store.cart.item);
//     const cartItems = Object.values(cartItemsObj);
//     const subtotal = cartItems.reduce((total, item) => total + (item.price / 100 || item.defaultPrice / 100), 0);
//     const gst = subtotal * 0.18;
//     const [total, setTotal] = useState(subtotal + gst);
//     const dispatch = useDispatch();

//     const clearingItems = () => {
//         dispatch(clearItems());
//         setTotal(0);
//         toast.warning("All Items removed Successfully");
//     };

//     if (cartItems.length === 0) {
//         return <EmptyCart />;
//     }

//     return (
//         <div className="flex flex-col md:flex-row justify-between items-start w-10/12 mx-auto mt-8 gap-8">
//             <div className="flex flex-col w-full md:w-8/12 gap-4">
//                 <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
//                 <div className="border bg-white shadow-md rounded-lg p-4">
//                     <div className="flex justify-between items-center w-full p-4 bg-gray-100 border rounded-lg gap-4">
//                         <div>
//                             <span className="font-bold">Cart</span>
//                             <span className="text-sm text-gray-300 ml-2">{cartItems.length} items</span>
//                         </div>
//                         <span onClick={clearingItems} className="cursor-pointer">
//                             <i className="fa-solid fa-trash"></i> Remove all
//                         </span>
//                     </div>
//                     {cartItems.map((cart, index) => (
//                         <CartPage {...cart} total={total} setTotal={setTotal} key={cart.id} />
//                     ))}
//                 </div>
//             </div>

//             <div className="flex flex-col w-full md:w-4/12 gap-6">
//                 <div className="border bg-white shadow-md rounded-lg p-6">
//                     <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//                     <div className="flex justify-between mb-2">
//                         <span>Subtotal</span>
//                         <span>₹ {subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between mb-2">
//                         <span>Shipping</span>
//                         <span className="text-green-400">Free</span>
//                     </div>
//                     <div className="flex justify-between py-2">
//                         <span>GST (18%)</span>
//                         <span>₹ {gst.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between font-bold text-lg">
//                         <span>Total</span>
//                         <span>₹ {total.toFixed(2)}</span>
//                     </div>
//                 </div>

//                 <div className="border bg-white shadow-md rounded-lg p-6">
//                     <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
//                     {/* Payment Options */}
//                     <div className="mb-4">
//                         <h3 className="text-sm font-semibold mb-2">Choose Payment Method</h3>
//                         <div className="flex flex-col gap-2">
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="payment" value="card" className="accent-black" />
//                                 Credit/Debit Card
//                             </label>
//                             <label className="flex items-center gap-2">
//                                 <input type="radio" name="payment" value="paypal" className="accent-black" />
//                                 Pay With UPI
//                             </label>
//                         </div>
//                     </div>

//                     {/* Coupon Code Section */}
//                     <div className="mt-4">
//                         <h3 className="text-sm font-semibold mb-2">Apply Coupon</h3>
//                         <div className="flex gap-2">
//                             <input
//                                 type="text"
//                                 placeholder="Enter coupon code"
//                                 className="border rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-green-400"
//                             />
//                             <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
//                                 Apply
//                             </button>
//                         </div>
//                         <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 my-4">
//                             Checkout
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CheckoutPage;
