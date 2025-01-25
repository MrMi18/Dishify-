
// import { useDispatch, useSelector } from "react-redux";
// import { imagUrl } from "../utils/constant";
// import { addItems } from "../utils/cartSlice";

// const Recommendation = ({menu}) =>{
//     // const{menu,size} = props;
//     // console.log(menu);
    
//     const{name,imageId,description,itemAttribute,price,defaultPrice} = menu;
    
   
    
//     const dispatch = useDispatch();
//     const addingItem  = (menu) =>{
//         dispatch(addItems({id : menu.id , data: menu}));
//     }

//     return (
//         // <div>
//         //     <h2>Recommendate ({sizeOfRecom})</h2>
//         <div className="flex m-2 mx-auto justify-between  border-b-2">
            
//             <div style={{display:"flex", flexDirection:"column",gap:".5rem",width:"60%"}}>
//                 {itemAttribute?.vegClassifier==="NONVEG"?
//                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                    <rect x="1" y="1" width="22" height="22" stroke="red" fill="none" strokeWidth="2"/>
//                    <polygon points="12,6 6,18 18,18" fill="red"/>
//                    </svg>:
//                     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="1" width="22" height="22" stroke="green" fill="none" strokeWidth="2"/><circle cx="12" cy="12" r="6" fill="green"/>
//                     </svg>
                    
              
//                 }
                

//                 <p className="Bold">{name}</p>
//                 <p className="Bold">₹{price/100||defaultPrice/100}</p>
//                 <p>{description}</p>

//             </div>
//             <div className="relative m-2 w-36 h-32  ">
//                    {!imagUrl+imageId?<img className = "w-32 h-32 object-cover rounded-xl " src={imagUrl+imageId} ></img>:null} 

//                 <button onClick={() => addingItem(menu)} 
//                     className="hover:bg-green-400 hover:text-slate-50 border-gray-300 p-1  text-slate-400  w-20 absolute  inset-x-5 bottom-0.5  bg-slate-100 rounded-lg font-bold"  >ADD</button>
                
                
               

//             </div>

//         </div>
//         // </div>
//     )
// }
// export default Recommendation;


import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { imagUrl } from "../utils/constant";
import dummy from "./assets/dummy.jpg"

const Recommendation = ({ menu }) => {
    const { name, imageId, description, itemAttribute, price, defaultPrice } = menu;
    const dispatch = useDispatch();

    const addingItem = (menu) => {
        dispatch(addItems({ id: menu.id, data: menu }));
    }

    return (
        <div className="flex m-2 mx-auto md:justify-between flex-col-reverse md:flex-row gap-16 sm:items-start border-b-2 w-[95%] py-4">
            <div    className="md:w-[60%] w-[90%] ml-2 mt-2"    style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                
                <p className="font-semibold text-lg">{name}hh</p>
                 <div className="flex gap-4 items-center">
                     <p className="font-semibold">₹{price / 100 || defaultPrice / 100}</p>
                    {itemAttribute?.vegClassifier === "NONVEG" ?
                    <svg  width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="22" height="22" stroke="red" fill="none" strokeWidth="2" />
                        <polygon points="12,6 6,18 18,18" fill="red" />
                    </svg> :
                    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="22" height="22" stroke="green" fill="none" strokeWidth="2" />
                        <circle cx="12" cy="12" r="6" fill="green" />
                    </svg>
                    }

                 </div>
                
                <p>{description}</p>
            </div>
            <div className="relative m-2 md:w-36 h-32">
                
                <img className="md:w-32 md:h-32   object-cover rounded-xl" src={imageId?`${imagUrl}${imageId}`:dummy} alt="" />
                <button onClick={() => addingItem(menu)} className="hover:bg-orange-400 hover:text-slate-50 border-gray-300 p-1 text-slate-400 w-20 absolute inset-x-0 mx-auto -bottom-16 md:inset-x-5 md:bottom-0.5 bg-slate-100 rounded-lg font-bold">ADD</button>
            </div>
        </div>
    )
}

export default Recommendation;
