
import React from 'react';
import { imagUrl } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItems ,addingOneItem, removeItem} from '../utils/cartSlice';

const CartPage = ({ name, description,id, imageId, defaultPrice, price,quantity,total,setTotal}) => {
  console.log(total);
  const cost = (price || defaultPrice)/100;
  
  const title = (!name.includes("("))?name:name.split("(")[0];
  const dispatch = useDispatch();
    const addingItem  = (id) =>{
        dispatch(addingOneItem({id}));
        setTotal(total+cost);
        
    }
    const clearItem  = (id) =>{
        dispatch(removeItem({id}));
        setTotal(total-cost);
        
    }
    


  return (
    <div className='flex justify-between items-center w-full p-4 bg-gray-100 border rounded-lg gap-4 shadow-sm m-1'>
      {/* Product Image */}
      <img
        className='w-20 h-20 object-cover border rounded-lg'
        src={imagUrl + imageId}
        alt='product'
      />
      
      {/* Product Details */}
      <div className='flex-1 flex flex-col gap-1 w-3/12'>
        <h3 className='font-semibold text-lg'>{title}</h3>
        <p className='text-sm text-gray-600'>Perfect choice for any occasion</p>
        <p className='text-sm'>Quantity: <span className='font-semibold'>{quantity}</span></p>
        <p className='text-sm'>Price: <span className='font-semibold'>₹ {cost }</span> per item</p>
      </div>

      {/* Quantity and Price Controls */}
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-2'>
          <button onClick={()=>clearItem(id)}
          className='px-2 py-1 bg-gray-200 rounded-full text-lg font-bold text-green-600'>-</button>
          <span className='font-semibold'>{quantity}</span>
           
          <button onClick={()=>addingItem(id)}
           className='px-2 py-1 bg-gray-200 rounded-full text-lg font-bold text-green-600'>+</button>
        </div>
        <span className='font-bold text-gray-700'>₹ {(cost*quantity).toFixed(2)}</span>
      </div>
      
    </div>
  );
};

export default CartPage;


// import React from 'react';
// import { imagUrl } from '../utils/constant';
// import { useDispatch } from 'react-redux';
// import { addingOneItem, removeItem } from '../utils/cartSlice';

// const CartPage = ({ name, imageId, price, defaultPrice, quantity, total, setTotal }) => {
//     const cost = (price || defaultPrice) / 100;
//     const dispatch = useDispatch();
  
//     const addingItem = (id) => {
//         dispatch(addingOneItem({ id }));
//         setTotal(total + cost);
//     };
  
//     const clearItem = (id) => {
//         dispatch(removeItem({ id }));
//         setTotal(total - cost);
//     };

//     return (
//         <div className='flex justify-between items-center w-full p-4 bg-gray-100 border rounded-lg gap-4 shadow-sm m-1'>
//             <img className='w-20 h-20 object-cover border rounded-lg' src={`${imagUrl}${imageId}`} alt='product' />
//             <div className='flex-1 flex flex-col gap-1'>
//                 <h3 className='font-semibold text-lg truncate'>{name}</h3>
//                 <p className='text-sm'>Quantity: <span className='font-semibold'>{quantity}</span></p>
//                 <p className='text-sm'>Price: <span className='font-semibold'>₹ {cost}</span> per item</p>
//             </div>
//             <div className='flex flex-col items-center gap-2'>
//                 <div className='flex items-center gap-2'>
//                     <button onClick={() => clearItem(imageId)} className='px-2 py-1 bg-gray-200 rounded-full text-lg font-bold text-green-600'>-</button>
//                     <span className='font-semibold'>{quantity}</span>
//                     <button onClick={() => addingItem(imageId)} className='px-2 py-1 bg-gray-200 rounded-full text-lg font-bold text-green-600'>+</button>
//                 </div>
//                 <span className='font-bold text-gray-700'>₹ {(cost * quantity).toFixed(2)}</span>
//             </div>
//         </div>
//     );
// };

// export default CartPage;
