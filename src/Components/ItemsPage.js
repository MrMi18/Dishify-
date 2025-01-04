import { useEffect, useState } from "react";
import { itemsPageApi,foodImageUrl, imagUrl } from "../utils/constant";
import { useParams,Link } from "react-router-dom";
import Cards from "./Cards";

const ItemsPage =  () =>{

    const {collection_id,tags} = useParams();
    
    const [restaurants, setRestaurants] = useState([]);
    const [cards,setCards] = useState([]);
    
    useEffect(() =>{

        fetchData();
    },[collection_id])

    const itemsPageApi1 = itemsPageApi+"/"+collection_id+"/"+tags;
    // console.log(itemsPageApi.localeCompare("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.174214&lng=79.0600207&collection=149088&tags=layout_FestiveEvent10&sortBy=&filters=&type=rcv2&offset=0&page_type=null"));
    console.log(itemsPageApi1);
    const fetchData = async () =>{
        const data = await fetch (itemsPageApi1);
        const json = await data.json();
        // console.log(json.data);
        // setItemsData(json.data);

        // const restaurants = json?.data?.cards[8]?.card?.card?.gridElements?.infoWithStyle?.restaurants;  event card 
        // console.log(restaurants);

        // setRestaurants(restaurants); event card 
        const {cards} = json?.data;
        setCards(cards);
       
        console.log(cards)
    }
    
    return(
        <div className=" w-10/12 mx-auto">
          <div className="py-6 w-9/12 text-left fle px-10 ">
             <h1 className="font-bold text-3xl  ">{cards[0]?.card?.card.title}</h1>
             <h1>{cards[0]?.card?.card?.description}</h1>
          </div>
           <div className="flex  gap-9 flex-wrap mx-2 m-2 justify-evenly ">{
            
             cards && cards.map(card =>{
               
                if(card?.card?.card?.["@type"] ==  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"){
                    
                   

                    return (<Link to={"/ResturantMenu/"+card?.card?.card.info.id} key={card?.card?.card.info.id}  style={{textDecoration:"none"}}>
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