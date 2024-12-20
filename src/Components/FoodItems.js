import { useEffect, useState } from "react"
import { API_URL, foodImageUrl, imagUrl } from "../utils/constant"
import { Link } from "react-router-dom";


// const imagCards = (props) => {
    
//     const{imagedata} = props;
//     const{imageId} = imagedata

//   return (
//     <div>
//       <img src={imagUrl+imageId}></img>
//     </div>
//   )
// }




const FoodItems = () =>{
    const[foodItemsList,setFoodItemList] = useState([]);

  
     useEffect(() =>{
        fetchData();
      },[]);
   const fetchData = async() =>{
       const data = await fetch(API_URL);
        const json = await data.json();
        // console.log(json);
        setFoodItemList (json?.data?.cards[0]?.card?.card?.imageGridCards?.info);


        // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        
        

   };
    return (
        <div style={{margin:"3rem"}}>
            <h2 style={{marginBottom:"2rem"}}>Popular Food Items </h2>
            <div className="flex w-9/12 mx-auto gap-2 carousel " >
                { 
                  foodItemsList && foodItemsList.map(item =>{
                    const source = foodImageUrl+"/"+item?.imageId;
                    const entityId  = item?.entityId;
                    
                    let collectionString = entityId && entityId.split("=");
                    
                    let collection_id = collectionString.length>1&& collectionString[1].split("&")[0];
                   
                    console.log(collectionString);
                     
                    // console.log(collection_id);
                    return( <Link key={item?.id} to={"/collection/"+collection_id}>
                        <img className="w-10" style={{width:"8rem"}}  src={source} alt={item?.accessibility?.alttext}/></Link>
                   )
                   console.log(source);
                  })
                  
                   
                }
                
            </div>

        </div>
    )
}

export default FoodItems;
