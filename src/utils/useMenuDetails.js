import { useEffect, useState } from "react";
import { menuAPI } from "../utils/constant";



const useMenuDetails = (resId) =>{

    const[menuDetails, setMenuDetails]= useState([]);


    useEffect( () =>{
        fetchData();
    },[])

   const fetchData = async() =>{
    const data = await fetch(menuAPI+resId);
    console.log("Menu data",data)
    const json = await data.json();
    
    

    setMenuDetails(json.data);
   }
   return menuDetails;

};
export default useMenuDetails;