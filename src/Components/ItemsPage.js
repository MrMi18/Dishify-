import { useEffect, useState } from "react";
import { itemsPageApi,foodImageUrl, imagUrl } from "../utils/constant";
import { useParams,Link } from "react-router-dom";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import ShimmerCircle from "./ShimmerCircle";
import Error from "./Error.js";

const ItemsPage =  () =>{

    const {collection_id,tags} = useParams();
    
    const [restaurants, setRestaurants] = useState([]);
    const [cards,setCards] = useState([]);
    
    useEffect(() =>{
       
       
        fetchData();
    },[collection_id])
    
    const cId = isNaN(collection_id)?80469:collection_id;
    const itemsPageApi1 = itemsPageApi+"/"+cId+"/"+tags;

    // console.log(itemsPageApi.localeCompare("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.174214&lng=79.0600207&collection=149088&tags=layout_FestiveEvent10&sortBy=&filters=&type=rcv2&offset=0&page_type=null"));
    // console.log(itemsPageApi1);
    const fetchData = async () =>{
        try{
          const data = await fetch (itemsPageApi1);
         const json = await data.json();  
         const {cards} = json?.data;
         setCards(cards);
        }catch(err){
            if(err) return <Error/>
        }
        
        // console.log(json.data);
        // setItemsData(json.data);

        // const restaurants = json?.data?.cards[8]?.card?.card?.gridElements?.infoWithStyle?.restaurants;  event card 
        // console.log(restaurants);

        // setRestaurants(restaurants); event card 
        
       
        // console.log(cards);
       
       
    }
    if(cards && cards.length==0) return <Shimmer text={true}/>
    return(
        <div className=" w-10/12 mx-auto mt-20">
          <div className="py-6 md:w-9/12 md:text-left px-5  md:px-10 ">
             <h1 className="font-bold text-3xl pb-2 ">{cards[0]?.card?.card.title}</h1>
             <h1>{cards[0]?.card?.card?.description}</h1>
          </div>
           <div className="flex  gap-9 flex-wrap mx-2 m-2 justify-evenly ">{
            
             cards && cards.map(card =>{
               
                if(card?.card?.card?.["@type"] ==  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"){
                    
                   

                    return (<Link to={"/ResturantMenu/"+card?.card?.card?.info?.id} key={card?.card?.card?.info?.id}  style={{textDecoration:"none"}}>
                    <Cards apiData={card?.card?.card} /></Link>)
                }
                
             })

           }</div>
            {
        //    restaurants && restaurants.map( res =>{
        //       return (<Link to={"/ResturantMenu/"+res.info.id} key={res.info.id}  style={{textDecoration:"none"}}>
        //                 <Cards apiData={res} /></Link>)
        //    })
           }
        
        </div>
    )
}
export default ItemsPage;