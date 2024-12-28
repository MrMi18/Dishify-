// import React from 'react'
// import { useSelector } from 'react-redux';
// import CartPage from './CartPage';

// const CheckoutPage = () => {
//     const cartItems =  useSelector(store => store.cart.item);
//   return (
//     <div className='flex'>
       
       

//        <div>
//        {/* //also dont change formating of this div  */}
//        <div className="border   ">      
//                 {
//                     cartItems && cartItems.map((cart,index )=>{
//                                 const key = cart+index;
//                                 console.log(key)
//                                 return (
//                                     //iske dikhre changes live 
                                     
//                                     <CartPage {...cart} key={key}/>  
//                                     // <div> heey testing</div> 
                                   
//                                 )
                        
//                     })
//                 } 
//             </div>
//        </div>
//        <div className='w-2/12'>
//           <ul className='flex justify-between'>
//             <li>Choose How To Pay</li>
//             <li>+Add New Method</li>
//           </ul>
//           <div>
//                <p>MI Coins 🪙</p>
//                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg> */}
//           </div>
//           <div className='flex'>
//                <svg className='w-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
//                 <path fill="#0d47a1" d="M5.446 18.01H.548c-.277 0-.502.167-.503.502L0 30.519c-.001.3.196.45.465.45.735 0 1.335 0 2.07 0C2.79 30.969 3 30.844 3 30.594 3 29.483 3 28.111 3 27l2.126.009c1.399-.092 2.335-.742 2.725-2.052.117-.393.14-.733.14-1.137l.11-2.862C7.999 18.946 6.949 18.181 5.446 18.01zM4.995 23.465C4.995 23.759 4.754 24 4.461 24H3v-3h1.461c.293 0 .534.24.534.535V23.465zM13.938 18h-3.423c-.26 0-.483.08-.483.351 0 .706 0 1.495 0 2.201C10.06 20.846 10.263 21 10.552 21h2.855c.594 0 .532.972 0 1H11.84C10.101 22 9 23.562 9 25.137c0 .42.005 1.406 0 1.863-.008.651-.014 1.311.112 1.899C9.336 29.939 10.235 31 11.597 31h4.228c.541 0 1.173-.474 1.173-1.101v-8.274C17.026 19.443 15.942 18.117 13.938 18zM14 27.55c0 .248-.202.45-.448.45h-1.105C12.201 28 12 27.798 12 27.55v-2.101C12 25.202 12.201 25 12.447 25h1.105C13.798 25 14 25.202 14 25.449V27.55zM18 18.594v5.608c.124 1.6 1.608 2.798 3.171 2.798h1.414c.597 0 .561.969 0 .969H19.49c-.339 0-.462.177-.462.476v2.152c0 .226.183.396.422.396h2.959c2.416 0 3.592-1.159 3.591-3.757v-8.84c0-.276-.175-.383-.342-.383h-2.302c-.224 0-.355.243-.355.422v5.218c0 .199-.111.316-.29.316H21.41c-.264 0-.409-.143-.409-.396v-5.058C21 18.218 20.88 18 20.552 18c-.778 0-1.442 0-2.22 0C18.067 18 18 18.263 18 18.594L18 18.594z"></path><path fill="#00adee" d="M27.038 20.569v-2.138c0-.237.194-.431.43-.431H28c1.368-.285 1.851-.62 2.688-1.522.514-.557.966-.704 1.298-.113L32 18h1.569C33.807 18 34 18.194 34 18.431v2.138C34 20.805 33.806 21 33.569 21H32v9.569C32 30.807 31.806 31 31.57 31h-2.14C29.193 31 29 30.807 29 30.569V21h-1.531C27.234 21 27.038 20.806 27.038 20.569L27.038 20.569zM42.991 30.465c0 .294-.244.535-.539.535h-1.91c-.297 0-.54-.241-.54-.535v-6.623-1.871c0-1.284-2.002-1.284-2.002 0v8.494C38 30.759 37.758 31 37.461 31H35.54C35.243 31 35 30.759 35 30.465V18.537C35 18.241 35.243 18 35.54 18h1.976c.297 0 .539.241.539.537v.292c1.32-1.266 3.302-.973 4.416.228 2.097-2.405 5.69-.262 5.523 2.375 0 2.916-.026 6.093-.026 9.033 0 .294-.244.535-.538.535h-1.891C45.242 31 45 30.759 45 30.465c0-2.786 0-5.701 0-8.44 0-1.307-2-1.37-2 0v8.44H42.991z"></path>
//                </svg>

//                <p>Paytm UPI</p>

//           </div>
//           <div className='flex'>
//                <svg className='w-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
//                 <defs><linearGradient id="sT4F6bvlidZvo2wcmTTbBa_w0MU3YDSYG7T_gr1" x1="18.51" x2="37.67" y1="20.45" y2="20.45" data-name="ÐÐµÐ·ÑÐ¼ÑÐ½Ð½ÑÐ¹ Ð³ÑÐ°Ð´Ð¸ÐµÐ½Ñ 16" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".44" stop-color="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><linearGradient id="sT4F6bvlidZvo2wcmTTbBb_w0MU3YDSYG7T_gr2" x1="5.62" x2="25.05" y1="27.94" y2="27.94" data-name="ÐÐµÐ·ÑÐ¼ÑÐ½Ð½ÑÐ¹ Ð³ÑÐ°Ð´Ð¸ÐµÐ½Ñ 11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fede00"></stop><stop offset="1" stop-color="#ffd000"></stop></linearGradient><linearGradient id="sT4F6bvlidZvo2wcmTTbBc_w0MU3YDSYG7T_gr3" x1="44.66" x2="5.36" y1="19.48" y2="19.48" data-name="ÐÐµÐ·ÑÐ¼ÑÐ½Ð½ÑÐ¹ Ð³ÑÐ°Ð´Ð¸ÐµÐ½Ñ 10" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#21ad64"></stop><stop offset="1" stop-color="#088242"></stop></linearGradient><linearGradient id="sT4F6bvlidZvo2wcmTTbBd_w0MU3YDSYG7T_gr4" x1="30.66" x2="4.23" y1="26.72" y2="26.72" gradientUnits="userSpaceOnUse"><stop offset=".11" stop-color="#0d62ab"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient></defs><path fill="url(#sT4F6bvlidZvo2wcmTTbBa_w0MU3YDSYG7T_gr1)" d="m44.36,21.36c-.23.42-5.54,11-5.54,11-.78,1.44-2.56,1.97-3.99,1.18l-10.4-5.51c-1.45-.8-2.24-2.58-1.43-4.03l9-17s9.38,5.22,9.84,5.47c3.15,1.74,4.27,5.72,2.52,8.89Z"></path><path fill="url(#sT4F6bvlidZvo2wcmTTbBb_w0MU3YDSYG7T_gr2)" d="m34.57,21.58s-9.84,17.28-9.99,17.56c-1.75,3.15-5.73,4.29-8.88,2.54-.26-.15-.51-.31-.75-.49,0,0,0,0,0,0-2.23-1.67-3.39-4.68-2.29-7.21,2.25-5.19,12.44-20.58,12.44-20.58l8.35,4.43c1.35.73,1.85,2.41,1.13,3.76Z"></path><path fill="url(#sT4F6bvlidZvo2wcmTTbBc_w0MU3YDSYG7T_gr3)" d="m31.45,13.67c2.08-2.52,6.57-3.28,9.55-1.67l-5.89-3.32-2.75-1.5c-2.3-1.25-5.02-1.68-7.53-.93s-4.55,2.35-5.85,4.73l-7.92,15.12c-.79,1.44-.27,3.24,1.16,4.04l4.45,2.57c1.46.8,3.29.26,4.07-1.21,0,0,9.71-16.25,9.95-16.7.22-.4.48-.78.76-1.12h0Z"></path><path fill="url(#sT4F6bvlidZvo2wcmTTbBd_w0MU3YDSYG7T_gr4)" d="m12.45,35.02c-.32,2.67.8,5.3,3.25,6.66l-8.22-4.52c-2.14-1.19-3.85-3.11-4.52-5.47s-.43-4.77.79-7l6.72-11.47c.74-1.35,2.42-1.84,3.77-1.11l6.06,3.29c1.37.75,1.86,2.46,1.09,3.82l-8.36,14.07c-.31.53-.52,1.12-.59,1.73Z"></path>
//                </svg> 
//                <p>GooglePay</p>
//           </div> 
//             <li>Cash On delivery</li>
//             <li>+ Add New Card</li>
           
//        </div>
//     </div>
//   )     
// }

// export default CheckoutPage



import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartPage from './CartPage';


const CheckoutPage = () => {
     const [isValid , setisValid] = useState(false);
    const cartItems = useSelector(store => store.cart.item);
    const subtotal = cartItems.reduce((total, item) => total + (item.price || item.defaultPrice), 0);
    const gst = subtotal * 0.18; // VAT 18%
     


    
    const couponHandler = () =>{
       if (isValid){
          total = total-50;
          console.log(total)
       }
    }

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
                              <span><i className="fa-solid fa-trash"></i> Remove all</span>
                              
                     </div>

                    {cartItems && cartItems.map((cart, index) => {
                        const key = cart + index;
                        return <CartPage {...cart} key={key} />;
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
                        <span>{(subtotal/100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span className='text-green-400'>Free</span>
                    </div>
                    <div className='flex justify-between py-2'>
                    <span>GST (18%)</span>
                     <span>₹ {(gst / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{(total/100).toFixed(2)}</span>
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
                                <input type="radio" name="payment" value="card" className="accent-green-500" />
                                Credit/Debit Card
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" value="paypal" className="accent-green-500" />
                                Pay With UPI
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="payment" value="micoins" className="accent-green-500" />
                                Pay with MI Coins
                            </label>
                        </div>
                    </div>

                    {/* Coupon Code Section */}
                    <div className="mt-4">
                        <h3 className="text-sm font-semibold mb-2">Apply Coupon</h3>
                        <div className="flex gap-2">
                            <input onChange={(e) =>{
                               if(e==='virat18'){
                                   setisValid(true);
                               }
                            }}
                                type="text"
                                placeholder="Enter coupon code"
                                className="border rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                   onClick={couponHandler()}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
