
import { useEffect, useState } from "react";
import { itemsPageApi } from "./constant";
import useMainApiData from "./useMainApiData";

const useAllResData = () => {
    const [resData, setResData] = useState([]);
    const [wholeResData, setWholeResData] = useState([]);
    const { data: mainData, isLoading, error } = useMainApiData();

      useEffect(() =>{
        setResData(mainData?.cards[0]?.card?.card?.imageGridCards?.info||[] );
      },[mainData])
                

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
                    
                //     const fetchMainApiData = async() =>{
                //         const{data} = await axios.get(API_URL);
             
                //         console.log("api call maded");
                //         return data.data;
                //  };
                //  return useQuery("mainData",fetchMainApiData,{
                //      cacheTime: 24*60*60*100,
                //      staleTime:24*60*60*100,
                //  })
                                 
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
    }, [resData]);
    
    return wholeResData;
};

export default useAllResData;



