// import { useEffect, useState } from "react"
// import { API_URL, foodImageUrl, imagUrl } from "../utils/constant"
// import { Link } from "react-router-dom";



// const FoodItems = () =>{
//     const[foodItemsList,setFoodItemList] = useState([]);

  
//      useEffect(() =>{
//         fetchData();
//       },[]);
//    const fetchData = async() =>{
//        const data = await fetch(API_URL);
//         const json = await data.json();
//         // console.log(json);
//         setFoodItemList (json?.data?.cards[0]?.card?.card?.imageGridCards?.info);


//         // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        
        

//    };
//     return (
//         <div className="m-3">
//             <h2 className="font-bold m-4 text-2xl py-2">Popular Food Items </h2>
//             <div className="flex mx-auto gap-4 w-10/12 overflow" >
//                 { 
//                   foodItemsList && foodItemsList.map(item =>{
//                     const source = foodImageUrl+"/"+item?.imageId;
//                     const entityId  = item?.entityId;
                    
//                     let collectionString = entityId && entityId.split("=");
//                     let tags = collectionString.length>1&& collectionString[2].split("&")[0];
//                     let collection_id = collectionString.length>1&& collectionString[1].split("&")[0];
                   
//                     // console.log(collectionString , tags);
                     
//                     // console.log(collection_id,tags);
//                     return(  <Link key={item?.id} to={`/collection/${collection_id}/${tags}`}>
//                         <img className=""   src={source} alt={item?.accessibility?.alttext}/></Link>
                       
                            
//                    )
//                    console.log(source);
//                   })
                  
                   
//                 }
                
//             </div>

//         </div>
//     )
// }

// export default FoodItems;



import { useEffect, useState } from "react";
import { API_URL, foodImageUrl } from "../utils/constant";
import { Link } from "react-router-dom";
import ShimmerCircle from "./ShimmerCircle";
// import Shimmer from "./Shimmer";

const FoodItems = ({foodItemTitle}) => {
    const [foodItemsList, setFoodItemList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch(API_URL);
        const json = await data.json();
        setFoodItemList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // console.log(json.data)
    };

   
    

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

    if(foodItemsList&&foodItemsList.length===0 )return <ShimmerCircle/>
   if(foodItemsList) return (
        <div className="relative py-4 w-9/12 mx-auto border-b-2">
            <h2 className="font-bold my-4 md:text-2xl text-xl py-2 text-left whitespace-nowrap ">{foodItemTitle||"Popular Food Items"}</h2>
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
                                            
                                            <Link to={`/collection/${collection_id}/${tags}`}>
                                                <img className="w-full h-full object-cover " src={`${foodImageUrl}/${item?.imageId}`} alt={item?.accessibility?.alttext} />
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

export default FoodItems;
