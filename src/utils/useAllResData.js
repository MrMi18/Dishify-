// import { useEffect, useState } from "react";
// import { API_URL, itemsPageApi } from "./constant";




// const useAllResData = () =>{

//     const [resData , setResData] = useState([]);
//    const [wholeResData, setWholeResData] = useState([]);
//     useEffect( () =>{
//         fetchData();
//     },[]);

//     const fetchData = async () =>{
//         const data = await fetch(API_URL);
//         const json = await data.json();
//         const banner = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
//         setResData(banner||[]);
        
//     }

//     console.log(wholeResData);
//             {resData &&
//                 resData.map((item, index) => {
//                     const entityId = item?.entityId;
//                     if (entityId) {
//                         const collectionString = entityId.split("=");
//                         const tags = collectionString.length > 1 && collectionString[2].split("&")[0];
//                         const collection_id = collectionString.length > 1 && collectionString[1].split("&")[0];
//                         const itemurl = `${itemsPageApi}/${collection_id}/${tags}`;
//                         // console.log(itemurl);

//                         const [items, setItems] = useState([]);
//                         const [hasUpdated, setHasUpdated] = useState(false); // Prevent redundant updates
                    
//                         useEffect(() => {
//                             fetchData();
//                         }, [itemurl]); // Dependency ensures fetch is called only when itemurl changes
                    
//                         const fetchData = async () => {
//                             const response = await fetch(itemurl);
//                             const json = await response.json();
                    
//                             const cards = json?.data?.cards || [];
//                             setItems(cards);
//                         };
                    
//                         useEffect(() => {
//                             if (!hasUpdated && items.length > 0) {
//                                 const restaurantData = items
//                                     .filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
//                                     .map(card => card?.card?.card.info);
                    
//                                 if (updateWholeResData && restaurantData.length > 0) {
//                                     updateWholeResData(prev => {
//                                         const existingIds = new Set(prev.map(res => res.id)); // Deduplicate by IDs
//                                         const newRestaurants = restaurantData.filter(res => !existingIds.has(res.id));
//                                         return [...prev, ...newRestaurants];
//                                     });
//                                     setHasUpdated(true); // Mark this `Testing` instance as processed
//                                 }
//                             }
//                         }, [items, updateWholeResData, hasUpdated]);
//                     }
//                     return null;
//                 })}
                
//                 return wholeResData;

// };



// export default useAllResData;


import { useEffect, useState } from "react";
import { API_URL, itemsPageApi } from "./constant";
import useMainApiData from "./useMainApiData";

const useAllResData = () => {
    const [resData, setResData] = useState([]);
    const [wholeResData, setWholeResData] = useState([]);
    const{mainData} = useMainApiData();

      useEffect(() =>{
        setResData(mainData?.cards[0]?.card?.card?.imageGridCards?.info||[] );
      },[])
                

    // Fetch restaurant data
    useEffect(() => {
        const fetchAllRestaurants = async () => {
            const allResPromises = resData.map(async (item) => {
                const entityId = item?.entityId;
                if (entityId) {
                    const collectionString = entityId.split("=");
                    const tags = collectionString.length > 1 && collectionString[2].split("&")[0];
                    const collection_id = collectionString.length > 1 && collectionString[1].split("&")[0];
                    const itemurl = `${itemsPageApi}/${collection_id}/${tags}`;

                    try {
                        const response = await fetch(itemurl);
                        const json = await response.json();
                        const cards = json?.data?.cards || [];
                       
                        return cards
                            .filter(
                                (card) =>
                                    card?.card?.card?.["@type"] ===
                                    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
                            )
                            .map((card) => card?.card?.card.info);
                            
                    } catch (error) {
                        console.error(`Error fetching restaurant data for URL ${itemurl}:`, error);
                        return [];
                    }
                }
                return [];
            });

            // Combine and deduplicate all restaurant data
            const allRestaurants = (await Promise.all(allResPromises)).flat();
            const uniqueRestaurants = Array.from(
                new Map(allRestaurants.map((res) => [res.id, res])).values()
            );
            setWholeResData(uniqueRestaurants);
        };

        if (resData.length > 0) {
            fetchAllRestaurants();
        }
    }, [mainData]);
    
    return wholeResData;
};

export default useAllResData;



