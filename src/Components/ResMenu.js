import { useEffect, useState } from "react";
import { menuAPI } from "../utils/constant";
import Shimmer from "./Shimmer";

const ResMenu = () => {

    const[menuDetails, setMenuDetails]= useState([]);



    useEffect( () =>{
        fetchData();
    },[])

   const fetchData = async() =>{
    const data = await fetch(menuAPI);
    const json = await data.json();
    
    

    setMenuDetails(json.data);
    console.log(menuDetails);
   }
   
    if(menuDetails.length===0) return <Shimmer/>

    const {name,avgRating,costForTwoMessage,cuisines,areaName,sla,totalRatingsString
    } = menuDetails?.cards[2]?.card?.card?.info;
    
    cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0]
      
  
    return(
        <div>
            <h2>{name}</h2>
            <p>{avgRating}</p>
            <p>{totalRatingsString}</p>
            <p>{costForTwoMessage}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
            <p>{sla.slaString}</p>
        </div>
    )
}
export default ResMenu;