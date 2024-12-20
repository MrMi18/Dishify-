import { useEffect } from "react";
import { foodItemsApi1,foodImageUrl, foodItemsApi2 } from "../utils/constant";
import { useParams } from "react-router-dom";

const ItemsPage =  () =>{

    const {collection_id} = useParams;

    useEffect(() =>{

        fetchData();
    },[])
    console.log(`${foodItemsApi1}${collection_id}${foodItemsApi2}`)
    const fetchData = async () =>{
        const data = await fetch (foodItemsApi1+collection_id+foodItemsApi2);
        const json = await data.json();
       
        console.log(json.data);

    }

    return(
        <div>
           
        </div>
    )
}
export default ItemsPage;