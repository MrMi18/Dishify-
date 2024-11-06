import { useEffect, useState } from "react"
import { API_URL, foodImageUrl, imagUrl } from "../utils/constant"


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
        console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        

   };
    return (
        <div>
            <h2>Popular Food Items </h2>
            <div className="food-logos" style={{display:"flex",width:"100vw"}}>
                {
                  foodItemsList.map(res =>{
                    const source = foodImageUrl+"/"+res?.imageId;
                    return( <img key={res.id} style={{width:"8rem"}}  src={source} alt={res.text}/>
                   )
                   console.log(source);
                  })
                   
                }
                
            </div>

        </div>
    )
}

export default FoodItems;