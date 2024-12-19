// import { useEffect, useState } from "react"
// import { API_URL, foodImageUrl, imagUrl } from "../utils/constant"
// import { Link } from "react-router-dom";


// // const imagCards = (props) => {
    
// //     const{imagedata} = props;
// //     const{imageId} = imagedata

// //   return (
// //     <div>
// //       <img src={imagUrl+imageId}></img>
// //     </div>
// //   )
// // }




// const FoodItems = () =>{
//     const[foodItemsList,setFoodItemList] = useState([]);

  
//      useEffect(() =>{
//         fetchData();
//       },[]);
//    const fetchData = async() =>{
//        const data = await fetch(API_URL);
//         const json = await data.json();
//         console.log(json);
//         setFoodItemList (json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
//         // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        
        

//    };
//     return (
//         <div style={{margin:"3rem"}}>
//             <h2 style={{marginBottom:"2rem"}}>Popular Food Items </h2>
//             <div className="flex w-9/12 mx-auto gap-2 carousel" >
//                 {
//                   foodItemsList.map(res =>{
//                     const source = foodImageUrl+"/"+res?.imageId;
                    
//                     return( <Link key={res?.id} to={"https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2"}>
//                         <img className="carousel-item w-3 carousel-start" style={{width:"8rem"}}  src={source} alt={res.text}/></Link>
//                    )
//                    console.log(source);
//                   })
                  
                   
//                 }
                
//             </div>

//         </div>
//     )
// }

// export default FoodItems;
import { useEffect, useState } from "react"
import { API_URL, foodImageUrl } from "../utils/constant"
import { Link } from "react-router-dom";

// const imagCards = (props) => {
    
//     const{imagedata} = props;
//     const{imageId} = imagedata

//   return (
//     <div>
//       <img src={imagUrl+imageId}></img>
//     </div>
//   )
// }




const FoodItems = () =>{
    const[foodItemsList,setFoodItemList] = useState([]);

  
     useEffect(() =>{
        fetchData();
      },[]);
   const fetchData = async() =>{
       const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json);
        setFoodItemList (json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        
        

   };
    return (
        <div style={{margin:"3rem"}}>
            <h2 style={{marginBottom:"2rem"}}>Popular Food Items </h2>
            <div className="relative" data-hs-carousel='{
              "loadingClasses": "opacity-0",
              "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
              "slidesQty": {
                "xs": 4,
                "lg": 6
              }
            }'>
              <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
                <div className="hs-carousel-body flex flex-nowrap gap-4 transition-transform duration-700">
                    {
                      foodItemsList.map(res =>{
                        const source = foodImageUrl+"/"+res?.imageId;
                        
                        return( <div key={res?.id} className="hs-carousel-slide flex-shrink-0">
                            <Link to={"https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2"}>
                                <img className="w-36 h-36 object-cover rounded-md" style={{width:"8rem"}} src={source} alt={res.text}/></Link>
                          </div>
                       )
                       console.log(source);
                      })
                    }
                </div>
              </div>
              <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg">
                <span className="text-2xl" aria-hidden="true">
                  <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </span>
                <span className="sr-only">Previous</span>
              </button>
              <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg">
                <span className="sr-only">Next</span>
                <span className="text-2xl" aria-hidden="true">
                  <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </button>
              <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
            </div>

        </div>
    )
}

export default FoodItems;
