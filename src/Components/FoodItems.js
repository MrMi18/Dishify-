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
        console.log(json);
        setFoodItemList (json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        
        

   };
    return (
        <div style={{margin:"3rem"}}>
            <h2 style={{marginBottom:"2rem"}}>Popular Food Items </h2>
            <div className="food-logos" style={{display:"flex",width:"100vw"}}>
                {
                  foodItemsList.map(res =>{
                    const source = foodImageUrl+"/"+res?.imageId;
                    
                    return( <Link key={res?.id} to={"https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2"}>
                        <img  style={{width:"8rem"}}  src={source} alt={res.text}/></Link>
                   )
                   console.log(source);
                  })
                  
                   
                }
                
            </div>

        </div>
    )
}

export default FoodItems;