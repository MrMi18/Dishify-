import { useEffect } from "react";
import { foodItemsApi } from "../utils/constant";

const ItemsPage =  () =>{


    useEffect(() =>{

        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch (foodItemsApi+);
        const json = await data.json();
    }

    return(
        <div>
           
        </div>
    )
}
export default ItemsPage;