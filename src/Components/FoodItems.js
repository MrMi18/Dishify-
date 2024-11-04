import { useEffect, useState } from "react"
import { API_URL, imagUrl } from "../utils/constant"


const imagCards = (props) => {
    
    const{imagedata} = props;
    const{imageId} = imagedata

  return (
    <div>
      <img src={imagUrl+imageId}></img>
    </div>
  )
}




const FoodItems = () =>{
    const[foodItemsList,setFoodItemList] = useState([]);

  const useEffect = ()=>{
        fetchData()
   }
   const fetchData = async() =>{
       const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json);
        setFoodItemList (json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
   
   };
    return (
        <div>
            <h2>Popular Food Items </h2>
            <div>
                {
                    foodItemsList.map((res) => 

                    <imagCards data={res} key={res.id}/> )
                }
                
            </div>

        </div>
    )
}

export default FoodItems;