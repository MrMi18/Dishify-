
import { useDispatch, useSelector } from "react-redux";
import { imagUrl } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const Recommendation = ({menu}) =>{
    // const{menu,size} = props;
    // console.log(menu);
    
    const{name,imageId,description,itemAttribute,price,defaultPrice} = menu;
    
   
    
    const dispatch = useDispatch();
    const addingItem  = (menu) =>{
        dispatch(addItems({id : menu.id , data: menu}));
    }

    return (
        // <div>
        //     <h2>Recommendate ({sizeOfRecom})</h2>
        <div className="flex m-2 mx-auto justify-between  border-b-2">
            
            <div style={{display:"flex", flexDirection:"column",gap:".5rem",width:"60%"}}>
                {itemAttribute?.vegClassifier==="NONVEG"?
                   <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <rect x="1" y="1" width="22" height="22" stroke="red" fill="none" strokeWidth="2"/>
                   <polygon points="12,6 6,18 18,18" fill="red"/>
                   </svg>:
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="1" width="22" height="22" stroke="green" fill="none" strokeWidth="2"/><circle cx="12" cy="12" r="6" fill="green"/>
                    </svg>
                    
              
                }
                

                <p className="Bold">{name}</p>
                <p className="Bold">₹{price/100||defaultPrice/100}</p>
                <p>{description}</p>

            </div>
            <div className="relative m-2 w-36 h-32  ">
                   {!imagUrl+imageId?<img className = "w-32 h-32 object-cover rounded-xl " src={imagUrl+imageId} ></img>:null} 

                <button onClick={() => addingItem(menu)} 
                    className="hover:bg-green-400 hover:text-slate-50 border-gray-300 p-1  text-slate-400  w-20 absolute  inset-x-5 bottom-0.5  bg-slate-100 rounded-lg font-bold"  >ADD</button>
                
                
               

            </div>

        </div>
        // </div>
    )
}
export default Recommendation;