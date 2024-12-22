import { useEffect, useState } from "react"
import { API_URL, foodImageUrl, imagUrl } from "../utils/constant"
import { Link } from "react-router-dom";



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
            <h2 className="font-bold m-4 text-2xl py-2">Popular Food Items </h2>
            <div className="flex mx-auto gap-4 w-10/12 overflow" >
                { 
                  foodItemsList && foodItemsList.map(item =>{
                    const source = foodImageUrl+"/"+item?.imageId;
                    const entityId  = item?.entityId;
                    
                    let collectionString = entityId && entityId.split("=");
                    let tags = collectionString.length>1&& collectionString[2].split("&")[0];
                    let collection_id = collectionString.length>1&& collectionString[1].split("&")[0];
                   
                    // console.log(collectionString , tags);
                     
                    // console.log(collection_id,tags);
                    return(  <Link key={item?.id} to={`/collection/${collection_id}/${tags}`}>
                        <img className=""   src={source} alt={item?.accessibility?.alttext}/></Link>
                       
                            
                   )
                   console.log(source);
                  })
                  
                   
                }
                
            </div>

        </div>
    )
}

export default FoodItems;
