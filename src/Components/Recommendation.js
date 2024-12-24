
import { useDispatch, useSelector } from "react-redux";
import { imagUrl } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const Recommendation = ({menu}) =>{
    // const{menu,size} = props;
    // console.log(menu);
    
    const{name,imageId,description,itemAttribute,price} = menu;
    console.log(menu);
   
    // const cart  = useSelector(store => store.cart.item);
    const dispatch = useDispatch();

    const addingItem  = (menu) =>{
        dispatch(addItems(menu));
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
                <p className="Bold">₹{price/100}</p>
                <p>{description}</p>

            </div>
            <div className="relative m-2" style={{display:"flex",flexDirection:"column",width:"15rem",textAlign:"center",gap:"1rem"}}>
                   {!imagUrl+imageId?<img className = "w-10/12 h-9/12 " style={{objectFit:"cover",border:"1px solid #aaaaaa",borderRadius:".9rem"}} src={imagUrl+imageId} ></img>:null} 

                <button onClick={() => addingItem(menu)} 
                    className="hover:bg-green-400 hover:text-slate-50 border-gray-300 p-2  text-slate-400  w-24 absolute inset-x-1/4 bottom-6  bg-slate-100 rounded-lg font-bold"  >ADD</button>
                
                
                <p className=" " style={{color:"#aaaaaa"}}>Customisable</p>

            </div>

        </div>
        // </div>
    )
}
export default Recommendation;