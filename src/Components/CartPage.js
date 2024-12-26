import React from 'react'
import { imagUrl } from '../utils/constant';


const CartPage = ({name,description,imageId,defaultPrice,price}) => {
 
    const cost = (price)?price:defaultPrice;
    console.log(name)
    const title = name.split("(")[0];
    
    

  return (
    <div className='flex justify-between w-2/5 m-4 h-30 bg-gray-100 border rounded-lg items-center text-sm'>
        
        <div className='flex  items-center gap-1 text-sm'>
          <img className='w-24 h-24   border rounded-lg object-cover' src={imagUrl+imageId}></img>
          <div  className='flex flex-col gap-0 w-9/12 h-3/5'>
            <h3 className=' font-bold '>{title}</h3>
            <p >Hey Order now for better  </p>
            <p >Qyt:{ 1}</p>
            <p >₹ : {cost/100} Per Item</p>
            
          </div>
        </div>
        <div className='flex  flex-col  justify-between w-1/5 text-center gap-6'>
           <div className='flex justify-evenly  border rounded-lg bg-slate-50 gap-1'>
              <button className='border w-7 h-7 rounded-full px-2 font-bold text-lg text-green-400 '>-</button>
              <button className='font-bold'>1</button>  
              <button className='border w-7 h-7 rounded-full px-2 font-bold text-lg text-green-400'>+</button>
           </div>
           <span>₹ {cost/100}  </span>
           
        </div>
    </div>
  )
}

export default CartPage

