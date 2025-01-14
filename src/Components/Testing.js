// import { useEffect,useState } from "react";
// import { Link } from "react-router-dom";
// import Cards from "./Cards";

// const Testing = ({itemurl,updateWholeResData }) =>{
//     const [items , setItems] = useState([]);
    
   
//     useEffect( () =>{
//         fetchData();
//     },[itemurl]);

//     const fetchData = async () =>{
//         const data = await fetch(itemurl);
//         const json = await data.json();
        

//         // const banner = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
//         const cards = json?.data?.cards||[];
//         setItems(cards);
        
//     }
//         const restaurantData = items
//          .filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
//          .map(card => card?.card?.card.info);
     
//      // Update the parent component's wholeResData
//      if (updateWholeResData && restaurantData.length > 0) {
//         updateWholeResData(prev => {
//             const existingIds = new Set(prev.map(res => res.id)); // Avoid duplicates
//             const newRestaurants = restaurantData.filter(res => !existingIds.has(res.id));
//             return [...prev, ...newRestaurants];
//         });
//     }
//     return(
//        <div>
//             <h1>hello </h1>
       
//      </div>
//     )
// }
// export default Testing;

import { useEffect, useState } from "react";

const Testing = ({ itemurl, updateWholeResData }) => {
    const [items, setItems] = useState([]);
    const [hasUpdated, setHasUpdated] = useState(false); // Prevent redundant updates

    useEffect(() => {
        fetchData();
    }, [itemurl]); // Dependency ensures fetch is called only when itemurl changes

    const fetchData = async () => {
        const response = await fetch(itemurl);
        const json = await response.json();

        const cards = json?.data?.cards || [];
        setItems(cards);
    };

    useEffect(() => {
        if (!hasUpdated && items.length > 0) {
            const restaurantData = items
                .filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
                .map(card => card?.card?.card.info);

            if (updateWholeResData && restaurantData.length > 0) {
                updateWholeResData(prev => {
                    const existingIds = new Set(prev.map(res => res.id)); // Deduplicate by IDs
                    const newRestaurants = restaurantData.filter(res => !existingIds.has(res.id));
                    return [...prev, ...newRestaurants];
                });
                setHasUpdated(true); // Mark this `Testing` instance as processed
            }
        }
    }, [items, updateWholeResData, hasUpdated]);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Testing;
