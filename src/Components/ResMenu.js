import { useEffect, useState } from "react";
import { menuAPI } from "../utils/constant";
import Shimmer from "./Shimmer";
import Recommendation from "./Recommendation";



const ResMenu = () => {

    const[menuDetails, setMenuDetails]= useState([]);
    const[flag, setFlag] = useState([true]);



    useEffect( () =>{
        fetchData();
    },[])

   const fetchData = async() =>{
    const data = await fetch(menuAPI);
    const json = await data.json();
    
    

    setMenuDetails(json.data);
    console.log(menuDetails);
   }
   
    if(menuDetails.length===0) return <Shimmer/>

    const {name,avgRating,costForTwoMessage,cuisines,areaName,sla,totalRatingsString,availability
    } = menuDetails?.cards[2]?.card?.card?.info;
    
    


      const {itemCards} = menuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      const{cards} = menuDetails?.cards[4].groupedCard.cardGroupMap.REGULAR;
      let count = 0;
      console.log(menuDetails);
     console.log(itemCards);
    return(
        <div style={{marginTop:"3rem",display:"flex" , flexDirection:"column", alignItems:"center",flexWrap:"wrap"}}>

           <h2 style={{paddingBottom:"3rem",marginLeft:"0px"}}>{name}</h2>
           
            
            <div className="resturant" style={{display:"flex" , flexDirection:"column", alignItems:"start",gap:".5rem",
                padding:"2rem",width:"70vw",height:"10rem",borderRadius:"2rem"}}>
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
            {
               
                cards.slice(1,9).map((menuSections,index) => {

                    const itemCards = menuSections?.card?.card?.itemCards;
                    // const active = flag;
                    return(

                    <div key={itemCards[count++]?.card?.info?.id|| index} >
                        <div onClick={() =>{
                            (setFlag(!flag));
                        }} className="menuCards"  style={{listStyle:"none", display:"flex",justifyContent:"space-between",padding:"1.5rem",marginTop:"2rem", paddingBottom:"0px"
                            
                        }}>
                           <li className="Bold"style={{fontWeight:"700",fontSize:"1.5rem"}}>{menuSections?.card?.card?.title} ({itemCards ? itemCards.length : 0})</li>
                           <li style={{}}> <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em" ><path fill="currentColor" d="M6.343 7.757L4.93 9.172 12 16.242l7.071-7.07-1.414-1.415L12 13.414 6.343 7.757z"/>
                            </svg></li>
                          
                        </div>
                   
                    <div className="fullMenu" style={{padding:"2rem"}}>
                        {flag&&itemCards && itemCards.map(details=> 
                 
                     <Recommendation key={details?.card?.info?.id} menu={details?.card?.info} size={itemCards.length} /> 
                     
                         )}
                    </div> 
                    </div>

                    )

                    

                })
             }
        </div>
    )
}
export default ResMenu;


// {cards.slice(1, 9).map((menuSection, index) => {
//     // Fetch itemCards for the current section
//     const itemCards = menuSection?.card?.card?.itemCards;

//     return (
//         <div key={index}>
//             {/* Section title */}
//             <li>{menuSection?.card?.card?.title} ({itemCards ? itemCards.length : 0})</li>
            
//             {/* Display each item in the current section */}
//             <div>
//                 {itemCards &&
//                     itemCards.map((details) => (
//                         <Recommendation key={details?.card?.info?.id} menu={details?.card?.info} size={itemCards.length} />
//                     ))}
//             </div>
//         </div>
//     );
// })}