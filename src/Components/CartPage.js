// import React from 'react'
// import { imagUrl } from '../utils/constant';


// const CartPage = ({name,description,imageId,defaultPrice,price}) => {
 
//     const cost = (price)?price:defaultPrice;
//     console.log(name)
//     const title = name.split("(")[0];
    
    

//   return (
//     <div className='flex justify-between w-2/5 m-4 h-30 bg-gray-100 border rounded-lg items-center text-sm'>
        
//         <div className='flex  items-center gap-1 text-sm'>
//           <img className='w-24 h-24   border rounded-lg object-cover' src={imagUrl+imageId}></img>
//           <div  className='flex flex-col gap-0 w-9/12 h-3/5'>
//             <h3 className=' font-bold '>{title}</h3>
//             <p >Hey Order now for better  </p>
//             <p >Qyt:{ 1}</p>
//             <p >₹ : {cost/100} Per Item</p>
            
//           </div>
//         </div>
//         <div className='flex  flex-col  justify-between w-1/5 text-center gap-6'>
//            <div className='flex justify-evenly  border rounded-lg bg-slate-50 gap-1'>
//               <button className='border w-7 h-7 rounded-full px-2 font-bold text-lg text-green-400 '>-</button>
//               <button className='font-bold'>1</button>  
//               <button className='border w-7 h-7 rounded-full px-2 font-bold text-lg text-green-400'>+</button>
//            </div>
//            <span>₹ {cost/100}  </span>
           
//         </div>
//     </div>
//   )
// }

// export default CartPage;




import React from 'react';
import { imagUrl } from '../utils/constant';

const CartPage = ({ name, description, imageId, defaultPrice, price }) => {
  const cost = price || defaultPrice;
  const title = name.split("(")[0];

  return (
    <div className='flex justify-between items-center w-full p-4 bg-gray-100 border rounded-lg gap-4 shadow-sm m-1'>
      {/* Product Image */}
      <img
        className='w-20 h-20 object-cover border rounded-lg'
        src={imagUrl + imageId}
        alt='product'
      />
      
      {/* Product Details */}
      <div className='flex-1 flex flex-col gap-1'>
        <h3 className='font-semibold text-lg truncate'>{title}</h3>
        <p className='text-sm text-gray-600'>Perfect choice for any occasion</p>
        <p className='text-sm'>Quantity: <span className='font-semibold'>1</span></p>
        <p className='text-sm'>Price: <span className='font-semibold'>₹ {cost / 100}</span> per item</p>
      </div>

      {/* Quantity and Price Controls */}
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-2'>
          <button className='px-2 py-1 bg-gray-200 rounded-full text-lg font-bold text-green-600'>-</button>
          <span className='font-semibold'>1</span>
          <button className='px-2 py-1 bg-gray-200 rounded-full text-lg font-bold text-green-600'>+</button>
        </div>
        <span className='font-bold text-gray-700'>₹ {cost / 100}</span>
      </div>
      
    </div>
  );
};

export default CartPage;
