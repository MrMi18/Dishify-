
import { memo, useContext, useEffect, useState } from "react";
import {  foodImageUrl } from "../utils/constant";
import { Link } from "react-router-dom";
import ShimmerCircle from "./ShimmerCircle";
import dummy from "./assets/dummy.jpg"

import useMainApiData from "../utils/useMainApiData";
// import Shimmer from "./Shimmer";

const FoodItems = () => {
    const [foodItemsList, setFoodItemList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { data: mainData, isLoading, error } = useMainApiData();
    
    useEffect(() =>{
        setFoodItemList(mainData?.cards[0]?.card?.card?.imageGridCards?.info||[]);
        
    },[mainData]);

    console.log(foodItemsList);

   
    

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const nextSlide = () => {
        if (currentIndex < foodItemsList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    console.log("food Items render");
    if(foodItemsList&&foodItemsList.length===0 )return <ShimmerCircle/>
   if(foodItemsList) return (
        <div className="relative py-4 w-9/12 mx-auto border-b-2">
            <h2 className="font-bold my-4 md:text-2xl text-xl py-2 text-left whitespace-nowrap ">{mainData?.cards[0]?.card?.card?.header?.title||"Popular Food Items"}</h2>
             <div className="relative flex justify-end">

             <button onClick={prevSlide} className= {` absolute top-1/4 left-2 px-1 z-10 rounded-full ${
                currentIndex === 0 ? "bg-gray-300" : "bg-gray-700 text-white" }`}
                disabled={currentIndex === 0} > ◀
            </button>


            <button onClick={nextSlide} className={`absolute top-1/4 right-2 px-1  z-10 rounded-full ${
                currentIndex >= foodItemsList.length - 6  ? "bg-gray-300": "bg-gray-700 text-white"  }`}
                disabled={currentIndex >= foodItemsList.length - 6}> ▶
            </button>

             </div>
            <div className="flex justify-center items-center">
                
                <div className="flex items-center justify-center w-full overflow-x-auto  no-scrollbar">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / Math.min(6, foodItemsList.length))}%)` }}>
                        {
                            foodItemsList && foodItemsList.map((item, index) => {
                                const entityId = item?.entityId;
                              
                                if (entityId) {
                                    const collectionString = entityId.split("=");
                                    const tags = collectionString.length > 1 && collectionString[2].split("&")[0];
                                    const collection_id = collectionString.length > 1 && collectionString[1].split("&")[0];

                                    return (
                                        <div key={item?.id} className="flex-shrink-0 px-2 w-1/2 md:w-1/6" 
                                        // style={{ width: `${100 / Math.min(6, foodItemsList.length)}%` }}
                                        >
                                            {console.log(`/collection/${collection_id}/${tags}`)}
                                            <Link to={`/collection/${collection_id}/${tags}`}>
                                                <img className="w-full h-full object-cover " src={`${foodImageUrl}/${item?.imageId}`} alt={item?.accessibility?.alttext}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.onerror = null; // Prevents infinite loop
                                                    e.target.src = dummy; // Fallback to dummy image
                                                }}
                                                />
                                            </Link>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })
                        }
                    </div>
                </div>
                 
            </div>
        </div>
    );
};

export default memo( FoodItems);
