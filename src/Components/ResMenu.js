

import { useParams } from "react-router-dom";
import useMenuDetails from "../utils/useMenuDetails";
import MainMenu from "./MainMenu";
import { ShimmerPostDetails } from "react-shimmer-effects";

const ResMenu = () => {
  const { resId } = useParams();

  const menuDetails = useMenuDetails(resId);

  if (menuDetails.length === 0) return <ShimmerPostDetails  card cta variant="EDITOR" />;

  const {name,avgRating,costForTwoMessage,cuisines,areaName,sla,totalRatingsString,availability,
  } = menuDetails?.cards[2]?.card?.card?.info;

  const cards =
    menuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(cards);

  return (
    <div className="mt-24">
      {/* <div style={{marginTop:"3rem",display:"flex" , flexDirection:"column", alignItems:"center",flexWrap:"wrap"}}>

           <h2 className="text-2xl font-bold m-2">{name}</h2>
           
           
            
            <div className="text-left m-2 border rounded-lg w-6/12 p-4 flex flex-col gap-3 shadow-md shadow-gray-400 py-5 " >
                <div className="ResturanDetails" style={{display:"flex",gap:".2rem"}}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
                  <p>{avgRating}</p>
                  <p>({totalRatingsString})</p>
                  <p style={{paddingLeft:".5rem"}}>.</p>
                  <p style={{paddingLeft:".5rem"}}>{costForTwoMessage}</p>

                </div>

            
               <p style={{fontWeight:"700",color:"#FF5200"}}>{cuisines.join(", ")}</p>
               <div style={{display:"flex",gap:"1rem"}}>
                <p className="Bold">Outlet</p>
               <p style={{color:"gray"}}>{areaName}</p>
               </div>
               {availability.opened===true?<p>{sla.slaString}</p>:<p>Closed & Not Delivering</p>}
               
            
            
              </div>
            </div> */}
      <div className=""
        style={{ marginTop: "3rem",display: "flex",flexDirection: "column",alignItems: "center",flexWrap: "wrap",backgroundColor: "#f9fafb",padding: "2rem",borderRadius: "8px",boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
      <h2 className="text-3xl font-bold mb-4 text-gray-800 uppercase tracking-wide">{name}</h2>

        <div className="text-left m-2 border rounded-lg md:w-8/12 w-11/12 p-5 flex flex-col gap-y-4 shadow-lg shadow-gray-300 bg-white">
          {/* Restaurant Details */}
          <div
            className="ResturanDetails flex items-center gap-3"
            style={{ fontSize: "1.1rem", color: "#333" }}
          >
            <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true"><circle    cx="10"    cy="10"    r="9"    fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"  ></circle>  <path    d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"    fill="white"  ></path>  
            <defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">  <stop stopColor="#21973B"></stop>  <stop offset="1" stopColor="#128540"></stop>
            </linearGradient></defs>
            </svg>

            <p className="font-semibold text-gray-700">{avgRating}</p>
            <p className="text-gray-500 text-sm">({totalRatingsString})</p>
            <div className="mx-1 w-1 h-1 rounded-full bg-gray-600"></div>
            <p className="text-gray-600 text-sm font-normal">
              {costForTwoMessage}
            </p>
          </div>

          {/* Cuisines */}
          <p className="font-bold text-orange-600 text-sm">
            {cuisines.join(", ")}
          </p>

          {/* Outlet Details */}
          <div className="flex items-center gap-4">
            <p className="font-semibold text-gray-900">Outlet:</p>
            <p className="text-gray-500">{areaName}</p>
          </div>

          {/* Availability */}
          {availability.opened ? (
            <p className="text-green-600 font-medium">{sla.slaString}</p>
          ) : (
            <p className="text-red-600 font-semibold">
              Closed & Not Delivering
            </p>
          )}
        </div>
      </div>

      <MainMenu cards={cards} />
    </div> // Main div
  );
};
export default ResMenu;

// import ResMenuHeader from "./ResMenuHeader";
// import Recommendation from "./Recommendation";
// import { useParams } from "react-router-dom";
// import useMenuDetails from "../utils/useMenuDetails";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const ResMenu = () => {
//     const { resId } = useParams();
//     const menuDetails = useMenuDetails(resId);

//     // if (menuDetails.length === 0) return <Shimmer />;

//     const { name, avgRating, costForTwoMessage, cuisines, areaName, sla, totalRatingsString, availability } = menuDetails?.cards[2]?.card?.card?.info;
//     const cards = menuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

//     return (
//         <div className="flex flex-col items-center my-6">
//             <h2 className="text-2xl font-bold">{name}</h2>
//             <div className="border rounded-lg w-6/12 p-4 flex flex-col gap-2 shadow-md">
//                 <div className="flex gap-2 items-center">
//                     <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <circle cx="10" cy="10" r="9" fill="#21973B" />
//                         <path d="M10 12V8" stroke="white" strokeWidth="2" />
//                         <path d="M8 10h4" stroke="white" strokeWidth="2" />
//                     </svg>
//                     <p>{avgRating}</p>
//                     <p>({totalRatingsString})</p>
//                     <p>{costForTwoMessage}</p>
//                 </div>
//                 <p className="font-semibold">{cuisines.join(", ")}</p>
//                 <div className="flex gap-1">
//                     <p className="font-bold">Outlet:</p>
//                     <p className="text-gray-600">{areaName}</p>
//                 </div>
//                 <p>{availability.opened ? sla.slaString : "Closed & Not Delivering"}</p>
//             </div>
//             <MainMenu cards={cards} />
//         </div>
//     );
// };

// export default ResMenu;
